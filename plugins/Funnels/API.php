<?php

/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret or copyright law.
 * Redistribution of this information or reproduction of this material is strictly forbidden
 * unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\Funnels;

use Piwik\Archive;
use Piwik\Archive\ArchiveInvalidator;
use Piwik\Common;
use Piwik\Container\StaticContainer;
use Piwik\DataTable;
use Piwik\Date;
use Piwik\Piwik;
use Piwik\Plugins\Funnels\Archiver\LogFunnelOptionLogic;
use Piwik\Plugins\Funnels\Db\Pattern;
use Piwik\Plugins\Funnels\Input\Step;
use Exception;
use Piwik\Plugins\Funnels\Input\Validator;
use Piwik\Plugins\Funnels\Model\FunnelNotFoundException;
use Piwik\Plugins\Funnels\Model\FunnelsModel;
use Piwik\Plugin\API as PluginApi;

/**
 * API for plugin Funnels
 *
 * @method static \Piwik\Plugins\Funnels\API getInstance()
 *
 * @OA\Tag(name="Funnels")
 */
class API extends PluginApi
{
    /**
     * @var FunnelsModel
     */
    private $funnels;

    /**
     * @var Validator
     */
    private $validator;

    /**
     * @var Pattern
     */
    private $pattern;

    /**
     * @var ArchiveInvalidator
     */
    private $archiveInvalidator;

    public function __construct(FunnelsModel $funnel, Validator $validator, Pattern $pattern, ArchiveInvalidator $invalidator)
    {
        $this->funnels = $funnel;
        $this->validator = $validator;
        $this->pattern = $pattern;
        $this->archiveInvalidator = $invalidator;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get summary metrics for a specific funnel like the number of conversions, the conversion rate, the number of
     * entries etc.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $idFunnel  Either idFunnel or idGoal has to be set
     * @param int $idGoal    Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal. [@example=4]
     * @param string $segment
     *
     * @return DataTable|DataTable\Map
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getMetrics",
     *     operationId="Funnels.getMetrics",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal.",
     *         @OA\Schema(
     *             type="integer",
     *             example=4
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getMetrics&idSite=1&period=day&date=today&idGoal=4&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getMetrics&idSite=1&period=day&date=today&idGoal=4&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getMetrics&idSite=1&period=day&date=today&idGoal=4&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"funnel_sum_entries":"0","funnel_sum_exits":"0","funnel_nb_conversions":"0","funnel_conversion_rate":"0%","funnel_abandoned_rate":"0%"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result")
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"funnel_sum_entries":0,"funnel_sum_exits":0,"funnel_nb_conversions":0,"funnel_conversion_rate":"0%","funnel_abandoned_rate":"0%"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="funnel_sum_entries", type="integer"),
     *                 @OA\Property(property="funnel_sum_exits", type="integer"),
     *                 @OA\Property(property="funnel_nb_conversions", type="integer"),
     *                 @OA\Property(property="funnel_conversion_rate", type="string"),
     *                 @OA\Property(property="funnel_abandoned_rate", type="string")
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="funnel_sum_entries    funnel_sum_exits    funnel_nb_conversions    funnel_conversion_rate    funnel_abandoned_rate
     * 0    0    0    0%    0%"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getMetrics($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $funnel = $this->getFunnelForReport($idSite, $idFunnel, $idGoal);
        $idFunnel = $funnel['idfunnel'];
        $revision = $funnel['revision'] ?? 0;

        $recordNames = Archiver::getNumericRecordNames($idFunnel, $revision);

        $archive = Archive::build($idSite, $period, $date, $segment);
        $table = $archive->getDataTableFromNumeric($recordNames);

        $columnMapping = array();
        foreach ($recordNames as $recordName) {
            $columnMapping[$recordName] = Archiver::getNumericColumnNameFromRecordName($recordName, $idFunnel, $revision);
        }

        $table->filter('ReplaceColumnNames', array($columnMapping));

        return $table;
    }

    private function getIdFunnelForReport($idSite, $idFunnel, $idGoal)
    {
        $funnel = $this->getFunnelForReport($idSite, $idFunnel, $idGoal);

        return $funnel['idfunnel'] ?? null;
    }

    private function getFunnelForReport($idSite, $idFunnel, $idGoal)
    {
        $isEcommerceOrder = $idGoal === 0 || $idGoal === '0';

        if (empty($idFunnel) && FunnelsModel::isValidGoalId($idGoal)) {
            // fetching by idGoal is needed for email reports
            $this->funnels->checkGoalFunnelExists($idSite, $idGoal);
            $funnel = $this->funnels->getGoalFunnel($idSite, $idGoal);
        } elseif (empty($idFunnel) && empty($idGoal) && !$isEcommerceOrder) {
            throw new Exception('No idFunnel or idGoal given');
        } else {
            $funnel = $this->funnels->checkFunnelExists($idSite, $idFunnel);
        }

        return $funnel;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get funnel flow information. The returned datatable will include a row for each step within the funnel
     * showing information like how many visits have entered or left the funnel at a certain position, how many
     * have completed a certain step etc.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $idFunnel  Either idFunnel or idGoal has to be set
     * @param int $idGoal    Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal. [@example=4]
     * @param string $segment
     *
     * @return DataTable
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnelFlow",
     *     operationId="Funnels.getFunnelFlow",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal.",
     *         @OA\Schema(
     *             type="integer",
     *             example=4
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlow&idSite=1&period=day&date=today&idGoal=4&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlow&idSite=1&period=day&date=today&idGoal=4&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlow&idSite=1&period=day&date=today&idGoal=4&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"label":"Job board","step_nb_visits_actual":"0","step_nb_entries":"0","step_nb_exits":"0","step_nb_visits":"0","step_nb_skipped":"0","step_nb_proceeded":"0","step_nb_progressions":"0","step_proceeded_rate":"0%","step_definition":"Pattern: Path equals ""\/jobs""","step_position":"1"},{"label":"Job view","step_nb_visits_actual":"0","step_nb_entries":"0","step_nb_exits":"0","step_nb_visits":"0","step_nb_skipped":"0","step_nb_proceeded":"0","step_nb_progressions":"0","step_proceeded_rate":"0%","step_definition":"Pattern: Path starts with ""\/jobs\/view\/""","step_position":"2"},{"label":"New Job Application","step_nb_visits_actual":"0","step_nb_entries":"0","step_nb_exits":"0","step_nb_visits":"0","step_nb_proceeded":"0","step_nb_progressions":"0","step_proceeded_rate":"0%","step_definition":"Converts goal: New Job Application","step_position":"3"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"label":"Job board","step_nb_visits_actual":0,"step_nb_entries":0,"step_nb_exits":0,"step_nb_visits":0,"step_nb_skipped":0,"step_nb_proceeded":0,"step_nb_progressions":0,"step_proceeded_rate":"0%","step_definition":"Pattern: Path equals ""\/jobs""","step_position":1},{"label":"Job view","step_nb_visits_actual":0,"step_nb_entries":0,"step_nb_exits":0,"step_nb_visits":0,"step_nb_skipped":0,"step_nb_proceeded":0,"step_nb_progressions":0,"step_proceeded_rate":"0%","step_definition":"Pattern: Path starts with ""\/jobs\/view\/""","step_position":2},{"label":"New Job Application","step_nb_visits_actual":0,"step_nb_entries":0,"step_nb_exits":"0","step_nb_visits":0,"step_nb_proceeded":0,"step_nb_progressions":0,"step_proceeded_rate":"0%","step_definition":"Converts goal: New Job Application","step_position":3}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="label", type="string"),
     *                         @OA\Property(property="step_nb_visits_actual", type="integer"),
     *                         @OA\Property(property="step_nb_entries", type="integer"),
     *                         @OA\Property(property="step_nb_exits", type="integer"),
     *                         @OA\Property(property="step_nb_visits", type="integer"),
     *                         @OA\Property(property="step_nb_skipped", type="integer"),
     *                         @OA\Property(property="step_nb_proceeded", type="integer"),
     *                         @OA\Property(property="step_nb_progressions", type="integer"),
     *                         @OA\Property(property="step_proceeded_rate", type="string"),
     *                         @OA\Property(property="step_definition", type="string"),
     *                         @OA\Property(property="step_position", type="integer")
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="label    step_nb_visits_actual    step_nb_entries    step_nb_exits    step_nb_visits    step_nb_skipped    step_nb_proceeded    step_nb_progressions    step_proceeded_rate    metadata_step_definition    metadata_step_position
     * Job board    0    0    0    0    0    0    0    0%    ""Pattern: Path equals """"/jobs""""""    1
     * Job view    0    0    0    0    0    0    0    0%    ""Pattern: Path starts with """"/jobs/view/""""""    2
     * New Job Application    0    0    0    0        0    0    0%    Converts goal: New Job Application    3"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnelFlow($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        $this->validator->checkReportViewPermission($idSite);

        $idFunnel = $this->getIdFunnelForReport($idSite, $idFunnel, $idGoal);
        $funnel = $this->funnels->getFunnel($idFunnel);

        $record = Archiver::completeRecordName(Archiver::FUNNELS_FLOW_RECORD, $funnel['idfunnel'], $funnel['revision']);

        $table = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded = false, $idSubtable = false);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ForceSortByStepPosition');
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ComputeBackfills');
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\RemoveExitsFromLastStep', array($funnel));
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\AddStepDefinitionMetadata', array($funnel));
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceFunnelStepLabel', array($funnel));

        return $table;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get funnel flow information. The returned datatable will include a row for each step within the funnel
     * showing information like how many visits have entered or left the funnel at a certain position, how many
     * have completed a certain step etc.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $idFunnel  Either idFunnel or idGoal has to be set
     * @param int $idGoal    Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal. [@example=4]
     * @param string $segment
     *
     * @return DataTable
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnelFlowTable",
     *     operationId="Funnels.getFunnelFlowTable",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal.",
     *         @OA\Schema(
     *             type="integer",
     *             example=4
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlowTable&idSite=1&period=day&date=today&idGoal=4&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlowTable&idSite=1&period=day&date=today&idGoal=4&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelFlowTable&idSite=1&period=day&date=today&idGoal=4&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"label":"Job board","step_nb_visits":"0","step_nb_progressions":"0","step_nb_entries":"0","step_nb_skipped":"0","step_nb_proceeded":"0","step_nb_exits":"0","Actions":"0","step_proceeded_rate":"0%","customLabel":"Job board","isVisitorLogEnabled":"1","step_definition":"Pattern: Path equals ""\/jobs""","step_position":"1"},{"label":"Job view","step_nb_visits":"0","step_nb_progressions":"0","step_nb_entries":"0","step_nb_skipped":"0","step_nb_proceeded":"0","step_nb_exits":"0","Actions":"0","step_proceeded_rate":"0%","customLabel":"Job view","isVisitorLogEnabled":"1","step_definition":"Pattern: Path starts with ""\/jobs\/view\/""","step_position":"2"},{"label":"New Job Application","step_nb_visits":"0","step_nb_progressions":"0","step_nb_entries":"0","step_nb_skipped":"0","step_nb_proceeded":"0","step_nb_exits":"0","Actions":"0","step_proceeded_rate":"0%","customLabel":"New Job Application","isVisitorLogEnabled":"1","step_definition":"Converts goal: New Job Application","step_position":"3"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"label":"Job board","step_nb_visits":0,"step_nb_progressions":0,"step_nb_entries":0,"step_nb_skipped":0,"step_nb_proceeded":0,"step_nb_exits":0,"Actions":0,"step_proceeded_rate":"0%","customLabel":"Job board","isVisitorLogEnabled":true,"step_definition":"Pattern: Path equals ""\/jobs""","step_position":1},{"label":"Job view","step_nb_visits":0,"step_nb_progressions":0,"step_nb_entries":0,"step_nb_skipped":0,"step_nb_proceeded":0,"step_nb_exits":0,"Actions":0,"step_proceeded_rate":"0%","customLabel":"Job view","isVisitorLogEnabled":true,"step_definition":"Pattern: Path starts with ""\/jobs\/view\/""","step_position":2},{"label":"New Job Application","step_nb_visits":0,"step_nb_progressions":0,"step_nb_entries":0,"step_nb_skipped":false,"step_nb_proceeded":0,"step_nb_exits":"0","Actions":0,"step_proceeded_rate":"0%","customLabel":"New Job Application","isVisitorLogEnabled":true,"step_definition":"Converts goal: New Job Application","step_position":3}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="label", type="string"),
     *                         @OA\Property(property="step_nb_visits", type="integer"),
     *                         @OA\Property(property="step_nb_progressions", type="integer"),
     *                         @OA\Property(property="step_nb_entries", type="integer"),
     *                         @OA\Property(property="step_nb_skipped", type="integer"),
     *                         @OA\Property(property="step_nb_proceeded", type="integer"),
     *                         @OA\Property(property="step_nb_exits", type="integer"),
     *                         @OA\Property(property="Actions", type="integer"),
     *                         @OA\Property(property="step_proceeded_rate", type="string"),
     *                         @OA\Property(property="customLabel", type="string"),
     *                         @OA\Property(property="isVisitorLogEnabled", type="boolean"),
     *                         @OA\Property(property="step_definition", type="string"),
     *                         @OA\Property(property="step_position", type="integer")
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="label    step_nb_visits    step_nb_progressions    step_nb_entries    step_nb_skipped    step_nb_proceeded    step_nb_exits    Actions    step_proceeded_rate    customLabel    metadata_isVisitorLogEnabled    metadata_step_definition    metadata_step_position
     * Job board    0    0    0    0    0    0    0    0%    Job board    1    ""Pattern: Path equals """"/jobs""""""    1
     * Job view    0    0    0    0    0    0    0    0%    Job view    1    ""Pattern: Path starts with """"/jobs/view/""""""    2
     * New Job Application    0    0    0    0    0    0    0    0%    New Job Application    1    Converts goal: New Job Application    3"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnelFlowTable($idSite, $period, $date, $idFunnel = false, $idGoal = false, $segment = false)
    {
        // The permission check is handled by this method
        $table = $this->getFunnelFlow($idSite, $period, $date, $idFunnel, $idGoal, $segment);

        $funnel = $this->funnels->getFunnel($idFunnel);

        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\PrepareColumnsAndMetadata', [$funnel]);
        $table->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\UpdateLabelWithPrefix');

        return $table;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get subTable funnel flow information. The returned datatable will include a row for proceeded, entries, and
     * exists. If they have any values, they'll have a subTable of their own.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $stepPosition The step number to pull the data for. [@example=1]
     * @param int $idFunnel  Either idFunnel or idGoal has to be set
     * @param int $idGoal    Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal. [@example=4]
     * @param string $segment
     *
     * @return DataTable
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnelStepSubtable",
     *     operationId="Funnels.getFunnelStepSubtable",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="stepPosition",
     *         in="query",
     *         required=true,
     *         description="The step number to pull the data for.",
     *         @OA\Schema(
     *             type="integer",
     *             example=1
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=false,
     *         description="Either idFunnel or idGoal has to be set. If goal given, will return the latest funnel for that goal.",
     *         @OA\Schema(
     *             type="integer",
     *             example=4
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelStepSubtable&idSite=1&period=day&date=today&stepPosition=1&idGoal=4&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelStepSubtable&idSite=1&period=day&date=today&stepPosition=1&idGoal=4&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelStepSubtable&idSite=1&period=day&date=today&stepPosition=1&idGoal=4&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"label":"Entries","nb_hits":"0","table_depth":"2","step_position":"1","sub_step_type":"entry"},{"label":"Exits","nb_hits":"0","table_depth":"2","step_position":"1","sub_step_type":"exit"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"label":"Entries","nb_hits":0,"table_depth":2,"step_position":1,"sub_step_type":"entry"},{"label":"Exits","nb_hits":0,"table_depth":2,"step_position":1,"sub_step_type":"exit"}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="label", type="string"),
     *                         @OA\Property(property="nb_hits", type="integer"),
     *                         @OA\Property(property="table_depth", type="integer"),
     *                         @OA\Property(property="step_position", type="integer"),
     *                         @OA\Property(property="sub_step_type", type="string")
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="label    nb_hits    metadata_table_depth    metadata_step_position    metadata_sub_step_type
     * Entries    0    2    1    entry
     * Exits    0    2    1    exit"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnelStepSubtable($idSite, $period, $date, $stepPosition, $idFunnel = false, $idGoal = false, $segment = false)
    {
        // The permission check is handled by this method
        $table = $this->getFunnelFlow($idSite, $period, $date, $idFunnel, $idGoal, $segment);

        $subTable = new DataTable();
        $subTable->filter('Piwik\Plugins\Funnels\DataTable\Filter\CompileSubtableUsingFlowData', [$table, $stepPosition]);
        $subTable->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\SortRowsAndTranslateLabels');

        return $subTable;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get all entry actions for the given funnel at the given step.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $idFunnel The ID of the funnel for which to get data. [@example=99]
     * @param string $segment
     * @param string $step Optional name of a step in the funnel to filter the results by.
     * @param bool $expanded
     * @param int|string $idSubtable
     * @param bool $flat
     *
     * @return DataTable
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnelEntries",
     *     operationId="Funnels.getFunnelEntries",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=true,
     *         description="The ID of the funnel for which to get data.",
     *         @OA\Schema(
     *             type="integer",
     *             example=99
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="step",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="expanded",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="boolean",
     *             default=false
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idSubtable",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             oneOf={
     *                 @OA\Schema(
     *                     type="integer"
     *                 ),
     *                 @OA\Schema(
     *                     type="string"
     *                 )
     *             }
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="flat",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="boolean",
     *             default=false
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelEntries&idSite=1&period=day&date=today&idFunnel=99&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelEntries&idSite=1&period=day&date=today&idFunnel=99&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelEntries&idSite=1&period=day&date=today&idFunnel=99&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"label":"Homepage","step_position":"1"},{"label":"50% off scuba diving masks promotion","step_position":"2"},{"label":"Item added to cart","step_position":"3"},{"label":"View cart","step_position":"4"},{"label":"Order page","step_position":"5"},{"label":"Thank you page","step_position":"6"},{"label":"Sales","step_position":"7"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"label":"Homepage","step_position":1},{"label":"50% off scuba diving masks promotion","step_position":2},{"label":"Item added to cart","step_position":3},{"label":"View cart","step_position":4},{"label":"Order page","step_position":5},{"label":"Thank you page","step_position":6},{"label":"Sales","step_position":7}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="label", type="string"),
     *                         @OA\Property(property="step_position", type="integer")
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="label    metadata_step_position
     * Homepage    1
     * 50% off scuba diving masks promotion    2
     * Item added to cart    3
     * View cart    4
     * Order page    5
     * Thank you page    6
     * Sales    7"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnelEntries($idSite, $period, $date, $idFunnel, $segment = false, $step = false, $expanded = false, $idSubtable = false, $flat = false)
    {
        $record = Archiver::FUNNELS_ENTRIES_RECORD;

        if ($flat) {
            $expanded = 1;
        }
        $table = $this->getActionReport($record, $idSite, $period, $date, $idFunnel, $segment, $step, $expanded, $idSubtable, $flat);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceEntryLabel');

        return $table;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get all exit actions for the given funnel at the given step.
     *
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param int $idFunnel The ID of the funnel for which to get data. [@example=99]
     * @param string $segment
     * @param string $step Optional name of a step in the funnel to filter the results by.
     *
     * @return DataTable
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnelExits",
     *     operationId="Funnels.getFunnelExits",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="period",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="date",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=true,
     *         description="The ID of the funnel for which to get data.",
     *         @OA\Schema(
     *             type="integer",
     *             example=99
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="segment",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="step",
     *         in="query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelExits&idSite=1&period=day&date=today&idFunnel=99&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelExits&idSite=1&period=day&date=today&idFunnel=99&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnelExits&idSite=1&period=day&date=today&idFunnel=99&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"label":"Homepage","step_position":"1"},{"label":"50% off scuba diving masks promotion","step_position":"2"},{"label":"Item added to cart","step_position":"3"},{"label":"View cart","step_position":"4"},{"label":"Order page","step_position":"5"},{"label":"Thank you page","step_position":"6"},{"label":"Sales","step_position":"7"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"label":"Homepage","step_position":1},{"label":"50% off scuba diving masks promotion","step_position":2},{"label":"Item added to cart","step_position":3},{"label":"View cart","step_position":4},{"label":"Order page","step_position":5},{"label":"Thank you page","step_position":6},{"label":"Sales","step_position":7}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="label", type="string"),
     *                         @OA\Property(property="step_position", type="integer")
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="label    metadata_step_position
     * Homepage    1
     * 50% off scuba diving masks promotion    2
     * Item added to cart    3
     * View cart    4
     * Order page    5
     * Thank you page    6
     * Sales    7"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnelExits($idSite, $period, $date, $idFunnel, $segment = false, $step = false)
    {
        $record = Archiver::FUNNELS_EXITS_RECORD;

        $table = $this->getActionReport($record, $idSite, $period, $date, $idFunnel, $segment, $step);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\CheckForExitUrlsMatchingStep', [$idSite, $idFunnel, $step]);
        $table->filter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceExitLabel');

        return $table;
    }

    private function getActionReport($record, $idSite, $period, $date, $idFunnel, $segment = false, $step = false, $expanded = false, $idSubtable = false, $flat = false)
    {
        $this->validator->checkReportViewPermission($idSite);
        $funnel = $this->funnels->checkFunnelExists($idSite, $idFunnel);

        $record = Archiver::completeRecordName($record, $idFunnel, $funnel['revision']);

        $root = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat);

        if (!empty($idSubtable)) {
            // a subtable was requested specifically. This is usually the case when fetching the referrers for entries

            return $root;
        }

        if (!empty($step)) {
            if ($root && $root instanceof DataTable\Map) {
                $clone = $root->getEmptyClone();
                foreach ($root->getDataTables() as $label => $table) {
                    $period = $table->getMetadata('period');
                    $periodName = $period->getLabel();
                    $periodDate = $period->getDateStart()->toString();
                    $stepTable = $this->getStepTableFromParentTable(
                        $table,
                        $step,
                        $idSubtable,
                        $record,
                        $idSite,
                        $periodName,
                        $periodDate,
                        $segment,
                        $expanded,
                        $flat
                    );
                    $clone->addTable($stepTable, $label);
                }

                return $clone;
            }
            return $this->getStepTableFromParentTable(
                $root,
                $step,
                $idSubtable,
                $record,
                $idSite,
                $period,
                $date,
                $segment,
                $expanded,
                $flat
            );
        }

        $funnel = $this->funnels->getFunnel($idFunnel);

        $root->filter('Piwik\Plugins\Funnels\DataTable\Filter\ForceSortByStepPosition');
        $root->queueFilter('Piwik\Plugins\Funnels\DataTable\Filter\ReplaceFunnelStepLabel', array($funnel));

        return $root;
    }

    /**
     * @param string $recordName
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string $segment
     * @param bool $expanded
     * @param int|string $idSubtable
     * @return DataTable
     */
    private function getDataTable($recordName, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat = false)
    {
        $table = Archive::createDataTableFromArchive($recordName, $idSite, $period, $date, $segment, $expanded, $flat, $idSubtable);

        return $table;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get funnel information for this goal.
     *
     * @param int $idSite
     * @param int $idGoal The ID of the goal for which to get funnel data. [@example=4]
     *
     * @return array|null   Null when no funnel has been configured yet, the funnel otherwise.
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getGoalFunnel",
     *     operationId="Funnels.getGoalFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=true,
     *         description="The ID of the goal for which to get funnel data.",
     *         @OA\Schema(
     *             type="integer",
     *             example=4
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Null when no funnel has been configured yet, the funnel otherwise.</br>Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getGoalFunnel&idSite=1&idGoal=4&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getGoalFunnel&idSite=1&idGoal=4&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.getGoalFunnel&idSite=1&idGoal=4&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"idfunnel":"7","idsite":"1","idgoal":"4","revision":"0","name":"New Job Application","created_date":"2016-11-18 00:40:28","activated":"1","steps":{"row":{{"position":"1","name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":"1","patternComparison":"path"},{"position":"2","name":"Job view","pattern_type":"path_startswith","pattern":"\/jobs\/view\/","required":"1","patternComparison":"path"}}},"isSalesFunnel":"0","final_step_position":"3"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="object",
     *                     @OA\Property(
     *                         property="row",
     *                         type="array",
     *                         @OA\Items(
     *                             type="object",
     *                             @OA\Xml(name="row"),
     *                             additionalProperties=true
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"idfunnel":7,"idsite":1,"idgoal":4,"revision":0,"name":"New Job Application","created_date":"2016-11-18 00:40:28","activated":true,"steps":{{"position":1,"name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":true,"patternComparison":"path"},{"position":2,"name":"Job view","pattern_type":"path_startswith","pattern":"\/jobs\/view\/","required":true,"patternComparison":"path"}},"isSalesFunnel":false,"final_step_position":3},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="idfunnel", type="integer"),
     *                 @OA\Property(property="idsite", type="integer"),
     *                 @OA\Property(property="idgoal", type="integer"),
     *                 @OA\Property(property="revision", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="created_date", type="string"),
     *                 @OA\Property(property="activated", type="boolean"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         additionalProperties=true,
     *                         @OA\Property(
     *                             type="object",
     *                             @OA\Property(property="position", type="integer"),
     *                             @OA\Property(property="name", type="string"),
     *                             @OA\Property(property="pattern_type", type="string"),
     *                             @OA\Property(property="pattern", type="string"),
     *                             @OA\Property(property="required", type="boolean"),
     *                             @OA\Property(property="patternComparison", type="string")
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(property="isSalesFunnel", type="boolean"),
     *                 @OA\Property(property="final_step_position", type="integer")
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getGoalFunnel($idSite, $idGoal)
    {
        $this->validator->checkReportViewPermission($idSite);

        // it is important to not throw an exception if a goal does not exist yet. Otherwise we would see a notification
        // in the Manage Goals UI when a user is editing a goal and has not configured a funnel yet for that goal.
        $this->funnels->checkGoalExists($idSite, $idGoal);

        if (intval($idGoal) === 0) {
            return $this->getSalesFunnelForSite($idSite);
        }

        return $this->funnels->getGoalFunnel($idSite, $idGoal);
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get funnel information for this goal.
     *
     * @param int $idSite
     *
     * @return array|null   Null when no funnel has been configured yet, the funnel otherwise.
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getSalesFunnelForSite",
     *     operationId="Funnels.getSalesFunnelForSite",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Null when no funnel has been configured yet, the funnel otherwise.</br>Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getSalesFunnelForSite&idSite=1&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getSalesFunnelForSite&idSite=1&format=JSON&token_auth=anonymous), TSV (N/A)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"idfunnel":"99","idsite":"1","idgoal":"0","revision":"0","name":"Sales","created_date":"2018-05-09 00:33:10","activated":"1","steps":{"row":{{"position":"1","name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":"0","patternComparison":"path"},{"position":"2","name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":"1","patternComparison":"path"},{"position":"3","name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":"1","patternComparison":"eventname"},{"position":"4","name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":"0","patternComparison":"path"},{"position":"5","name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":"1","patternComparison":"path"},{"position":"6","name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":"1","patternComparison":"path"}}},"isSalesFunnel":"1","final_step_position":"7"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="object",
     *                     @OA\Property(
     *                         property="row",
     *                         type="array",
     *                         @OA\Items(
     *                             type="object",
     *                             @OA\Xml(name="row"),
     *                             additionalProperties=true
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"idfunnel":99,"idsite":1,"idgoal":0,"revision":0,"name":"Sales","created_date":"2018-05-09 00:33:10","activated":true,"steps":{{"position":1,"name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":false,"patternComparison":"path"},{"position":2,"name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":true,"patternComparison":"path"},{"position":3,"name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":true,"patternComparison":"eventname"},{"position":4,"name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":false,"patternComparison":"path"},{"position":5,"name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":true,"patternComparison":"path"},{"position":6,"name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":true,"patternComparison":"path"}},"isSalesFunnel":true,"final_step_position":7},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="idfunnel", type="integer"),
     *                 @OA\Property(property="idsite", type="integer"),
     *                 @OA\Property(property="idgoal", type="integer"),
     *                 @OA\Property(property="revision", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="created_date", type="string"),
     *                 @OA\Property(property="activated", type="boolean"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         additionalProperties=true,
     *                         @OA\Property(
     *                             type="object",
     *                             @OA\Property(property="position", type="integer"),
     *                             @OA\Property(property="name", type="string"),
     *                             @OA\Property(property="pattern_type", type="string"),
     *                             @OA\Property(property="pattern", type="string"),
     *                             @OA\Property(property="required", type="boolean"),
     *                             @OA\Property(property="patternComparison", type="string")
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(property="isSalesFunnel", type="boolean"),
     *                 @OA\Property(property="final_step_position", type="integer")
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getSalesFunnelForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->getSalesFunnelForSite($idSite);
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get funnel information by ID.
     *
     * @param int $idSite
     * @param int $idFunnel The ID of the funnel for which to get data. [@example=99]
     *
     * @return array|null   Null when no funnel has been configured yet, the funnel otherwise.
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getFunnel",
     *     operationId="Funnels.getFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=true,
     *         description="The ID of the funnel for which to get data.",
     *         @OA\Schema(
     *             type="integer",
     *             example=99
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Null when no funnel has been configured yet, the funnel otherwise.</br>Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnel&idSite=1&idFunnel=99&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getFunnel&idSite=1&idFunnel=99&format=JSON&token_auth=anonymous), TSV (N/A)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"idfunnel":"99","idsite":"1","idgoal":"0","revision":"0","name":"Sales","created_date":"2018-05-09 00:33:10","activated":"1","steps":{"row":{{"position":"1","name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":"0","patternComparison":"path"},{"position":"2","name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":"1","patternComparison":"path"},{"position":"3","name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":"1","patternComparison":"eventname"},{"position":"4","name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":"0","patternComparison":"path"},{"position":"5","name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":"1","patternComparison":"path"},{"position":"6","name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":"1","patternComparison":"path"}}},"isSalesFunnel":"1","final_step_position":"7"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="object",
     *                     @OA\Property(
     *                         property="row",
     *                         type="array",
     *                         @OA\Items(
     *                             type="object",
     *                             @OA\Xml(name="row"),
     *                             additionalProperties=true
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"idfunnel":99,"idsite":1,"idgoal":0,"revision":0,"name":"Sales","created_date":"2018-05-09 00:33:10","activated":true,"steps":{{"position":1,"name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":false,"patternComparison":"path"},{"position":2,"name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":true,"patternComparison":"path"},{"position":3,"name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":true,"patternComparison":"eventname"},{"position":4,"name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":false,"patternComparison":"path"},{"position":5,"name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":true,"patternComparison":"path"},{"position":6,"name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":true,"patternComparison":"path"}},"isSalesFunnel":true,"final_step_position":7},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="idfunnel", type="integer"),
     *                 @OA\Property(property="idsite", type="integer"),
     *                 @OA\Property(property="idgoal", type="integer"),
     *                 @OA\Property(property="revision", type="integer"),
     *                 @OA\Property(property="name", type="string"),
     *                 @OA\Property(property="created_date", type="string"),
     *                 @OA\Property(property="activated", type="boolean"),
     *                 @OA\Property(
     *                     property="steps",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         additionalProperties=true,
     *                         @OA\Property(
     *                             type="object",
     *                             @OA\Property(property="position", type="integer"),
     *                             @OA\Property(property="name", type="string"),
     *                             @OA\Property(property="pattern_type", type="string"),
     *                             @OA\Property(property="pattern", type="string"),
     *                             @OA\Property(property="required", type="boolean"),
     *                             @OA\Property(property="patternComparison", type="string")
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(property="isSalesFunnel", type="boolean"),
     *                 @OA\Property(property="final_step_position", type="integer")
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getFunnel(int $idSite, int $idFunnel)
    {
        $this->validator->checkReportViewPermission($idSite);

        $funnel = $this->funnels->getFunnel($idFunnel);
        $this->funnels->checkFunnelMatchesSite($idSite, $funnel);

        return $funnel;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get activated funnels for the current site.
     *
     * @param int $idSite
     *
     * @return array
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getAllActivatedFunnelsForSite",
     *     operationId="Funnels.getAllActivatedFunnelsForSite",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getAllActivatedFunnelsForSite&idSite=1&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getAllActivatedFunnelsForSite&idSite=1&format=JSON&token_auth=anonymous), TSV (N/A)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"row":{{"idfunnel":"2","idsite":"1","idgoal":"6","revision":"0","name":"New Resume","created_date":"2016-11-17 01:10:20","activated":"1","steps":{"row":{"position":"1","name":"Job board","pattern_type":"path_contains","pattern":"\/jobs\/","required":"1","patternComparison":"path"}},"isSalesFunnel":"0","final_step_position":"2"},{"idfunnel":"3","idsite":"1","idgoal":"5","revision":"0","name":"View Submit Job","created_date":"2016-11-17 01:12:46","activated":"1","steps":{"row":{"position":"1","name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":"0","patternComparison":"path"}},"isSalesFunnel":"0","final_step_position":"2"},{"idfunnel":"7","idsite":"1","idgoal":"4","revision":"0","name":"New Job Application","created_date":"2016-11-18 00:40:28","activated":"1","steps":{"row":{{"position":"1","name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":"1","patternComparison":"path"},{"position":"2","name":"Job view","pattern_type":"path_startswith","pattern":"\/jobs\/view\/","required":"1","patternComparison":"path"}}},"isSalesFunnel":"0","final_step_position":"3"},{"idfunnel":"8","idsite":"1","idgoal":"7","revision":"0","name":"Liveaboard.com click","created_date":"2016-12-02 02:52:40","activated":"1","steps":{"row":{{"position":"1","name":"Any divezone page","pattern_type":"url_contains","pattern":"divezone.net","required":"0","patternComparison":"url"},{"position":"2","name":"Diving page","pattern_type":"url_contains","pattern":"\/diving","required":"0","patternComparison":"url"}}},"isSalesFunnel":"0","final_step_position":"3"},{"idfunnel":"99","idsite":"1","idgoal":"0","revision":"0","name":"Sales","created_date":"2018-05-09 00:33:10","activated":"1","steps":{"row":{{"position":"1","name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":"0","patternComparison":"path"},{"position":"2","name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":"1","patternComparison":"path"},{"position":"3","name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":"1","patternComparison":"eventname"},{"position":"4","name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":"0","patternComparison":"path"},{"position":"5","name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":"1","patternComparison":"path"},{"position":"6","name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":"1","patternComparison":"path"}}},"isSalesFunnel":"1","final_step_position":"7"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="row",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Xml(name="row"),
     *                         additionalProperties=true,
     *                         @OA\Property(
     *                             property="steps",
     *                             type="object",
     *                             @OA\Property(
     *                                 property="row",
     *                                 type="array",
     *                                 @OA\Items(
     *                                     type="object",
     *                                     @OA\Xml(name="row"),
     *                                     additionalProperties=true
     *                                 )
     *                             )
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={{"idfunnel":2,"idsite":1,"idgoal":6,"revision":0,"name":"New Resume","created_date":"2016-11-17 01:10:20","activated":true,"steps":{{"position":1,"name":"Job board","pattern_type":"path_contains","pattern":"\/jobs\/","required":true,"patternComparison":"path"}},"isSalesFunnel":false,"final_step_position":2},{"idfunnel":3,"idsite":1,"idgoal":5,"revision":0,"name":"View Submit Job","created_date":"2016-11-17 01:12:46","activated":true,"steps":{{"position":1,"name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":false,"patternComparison":"path"}},"isSalesFunnel":false,"final_step_position":2},{"idfunnel":7,"idsite":1,"idgoal":4,"revision":0,"name":"New Job Application","created_date":"2016-11-18 00:40:28","activated":true,"steps":{{"position":1,"name":"Job board","pattern_type":"path_equals","pattern":"\/jobs","required":true,"patternComparison":"path"},{"position":2,"name":"Job view","pattern_type":"path_startswith","pattern":"\/jobs\/view\/","required":true,"patternComparison":"path"}},"isSalesFunnel":false,"final_step_position":3},{"idfunnel":8,"idsite":1,"idgoal":7,"revision":0,"name":"Liveaboard.com click","created_date":"2016-12-02 02:52:40","activated":true,"steps":{{"position":1,"name":"Any divezone page","pattern_type":"url_contains","pattern":"divezone.net","required":false,"patternComparison":"url"},{"position":2,"name":"Diving page","pattern_type":"url_contains","pattern":"\/diving","required":false,"patternComparison":"url"}},"isSalesFunnel":false,"final_step_position":3},{"idfunnel":99,"idsite":1,"idgoal":0,"revision":0,"name":"Sales","created_date":"2018-05-09 00:33:10","activated":true,"steps":{{"position":1,"name":"Homepage","pattern_type":"path_equals","pattern":"\/","required":false,"patternComparison":"path"},{"position":2,"name":"50% off scuba diving masks promotion","pattern_type":"path_equals","pattern":"\/promotion\/50-off-scuba-diving-masks","required":true,"patternComparison":"path"},{"position":3,"name":"Item added to cart","pattern_type":"eventname_equals","pattern":"added - diving mask","required":true,"patternComparison":"eventname"},{"position":4,"name":"View cart","pattern_type":"path_equals","pattern":"\/cart","required":false,"patternComparison":"path"},{"position":5,"name":"Order page","pattern_type":"path_equals","pattern":"\/checkout","required":true,"patternComparison":"path"},{"position":6,"name":"Thank you page","pattern_type":"path_startswith","pattern":"\/checkout\/order-received","required":true,"patternComparison":"path"}},"isSalesFunnel":true,"final_step_position":7}},
     *             @OA\Schema(
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     additionalProperties=true,
     *                     @OA\Property(
     *                         type="object",
     *                         @OA\Property(property="idfunnel", type="integer"),
     *                         @OA\Property(property="idsite", type="integer"),
     *                         @OA\Property(property="idgoal", type="integer"),
     *                         @OA\Property(property="revision", type="integer"),
     *                         @OA\Property(property="name", type="string"),
     *                         @OA\Property(property="created_date", type="string"),
     *                         @OA\Property(property="activated", type="boolean"),
     *                         @OA\Property(
     *                             property="steps",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 additionalProperties=true,
     *                                 @OA\Property(
     *                                     type="object",
     *                                     @OA\Property(property="position", type="integer"),
     *                                     @OA\Property(property="name", type="string"),
     *                                     @OA\Property(property="pattern_type", type="string"),
     *                                     @OA\Property(property="pattern", type="string"),
     *                                     @OA\Property(property="required", type="boolean"),
     *                                     @OA\Property(property="patternComparison", type="string")
     *                                 )
     *                             )
     *                         ),
     *                         @OA\Property(property="isSalesFunnel", type="boolean"),
     *                         @OA\Property(property="final_step_position", type="integer")
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getAllActivatedFunnelsForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->getAllActivatedFunnelsForSite($idSite);
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * @param int $idSite
     *
     * @return bool
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.hasAnyActivatedFunnelForSite",
     *     operationId="Funnels.hasAnyActivatedFunnelForSite",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.hasAnyActivatedFunnelForSite&idSite=1&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.hasAnyActivatedFunnelForSite&idSite=1&format=JSON&token_auth=anonymous), [TSV (Excel)](https://demo.matomo.cloud/?module=API&method=Funnels.hasAnyActivatedFunnelForSite&idSite=1&format=Tsv&token_auth=anonymous)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"1"},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result")
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"value":true},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="value", type="boolean")
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/vnd.ms-excel",
     *             example="value
     * 1"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function hasAnyActivatedFunnelForSite($idSite)
    {
        $this->validator->checkReportViewPermission($idSite);

        return $this->funnels->hasAnyActivatedFunnelForSite($idSite);
    }

    /**
     * Deletes the given goal funnel.
     *
     * @param int $idSite
     * @param int $idGoal The ID of the goal to which the funnel is tied.
     *
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.deleteGoalFunnel",
     *     operationId="Funnels.deleteGoalFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=true,
     *         description="The ID of the goal to which the funnel is tied.",
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Response(response=200, ref="#/components/responses/GenericSuccessNoBody"),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    public function deleteGoalFunnel($idSite, $idGoal): void
    {
        $this->validator->checkWritePermission($idSite);

        $idFunnel = $this->funnels->deleteGoalFunnel($idSite, $idGoal);
        if (!empty($idFunnel)) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
        }
    }

    /**
     * Deletes the given goal funnel.
     *
     * @param int $idSite
     * @param int $idFunnel The ID of the funnel to delete.
     *
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.deleteNonGoalFunnel",
     *     operationId="Funnels.deleteNonGoalFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(response=200, ref="#/components/responses/GenericSuccessNoBody"),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    public function deleteNonGoalFunnel(int $idSite, int $idFunnel): void
    {
        $this->validator->checkWritePermission($idSite);

        $idFunnel = $this->funnels->deleteNonGoalFunnel($idSite, $idFunnel);
        if (!empty($idFunnel)) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
        }
    }

    /**
     * Sets (overwrites) a funnel for this goal.
     *
     * @param int $idSite
     * @param int $idGoal
     * @param int $isActivated Whether the funnel is activated. E.g. 0 or 1. As soon as a funnel is activated, a report
     * will be generated for this funnel.
     * @param array[] $steps Definitions of each funnel step. If isActivated = true, there has to be at least one step.
     * E.g. [{'position': 1, 'name': 'Step1', 'pattern_type': 'path_contains', 'pattern': 'path/dir', 'required': 0}]
     *
     * @return int   The id of the created or updated funnel
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.setGoalFunnel",
     *     operationId="Funnels.setGoalFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idGoal",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="isActivated",
     *         in="query",
     *         required=true,
     *         description="Whether the funnel is activated. E.g. 0 or 1. As soon as a funnel is activated, a report will be generated for this funnel.",
     *         @OA\Schema(
     *             type="integer",
     *             enum={0,1}
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="steps",
     *         in="query",
     *         required=false,
     *         description="Definitions of each funnel step. If isActivated = true, there has to be at least one step. E.g. [{'position': 1, 'name': 'Step1', 'pattern_type': 'path_contains', 'pattern': 'path/dir', 'required': 0}]",
     *         @OA\Schema(
     *             type="string",
     *             default="[]"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="The id of the created or updated funnel",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    public function setGoalFunnel($idSite, $idGoal, $isActivated, $steps = [])
    {
        $this->validator->checkWritePermission($idSite);
        $steps = $this->unsanitizeSteps($steps);
        $this->validator->validateFunnelConfiguration($isActivated, $steps);
        $this->funnels->checkGoalExists($idSite, $idGoal);

        $now = Date::now()->getDatetime();
        $isActivated = !empty($isActivated);

        if (empty($steps)) {
            $steps = [];
        }

        $shouldRearchive = false;
        if ($idSite && $idGoal && $isActivated) {
            $funnel = $this->funnels->getGoalFunnel($idSite, $idGoal);
            if (!empty($funnel['steps']) && $steps != $funnel['steps']) {
                // existing funnel whose steps changed
                $shouldRearchive = true;
            } elseif (empty($funnel)) {
                // new funnel, we always need to rearchive
                $shouldRearchive = true;
            }
        }

        // remove invalidations for the old funnel ID if any are queued so we don't have to re-archive them
        try {
            if ($shouldRearchive) {
                $oldIdFunnel = $this->getIdFunnelForReport($idSite, false, $idGoal);
                $this->removeInvalidationsSafely($idSite, $oldIdFunnel);
            }
        } catch (FunnelNotFoundException $ex) {
            // ignore
        }

        $idFunnel = $this->funnels->setGoalFunnel($idSite, $idGoal, $isActivated, $steps, $now, $shouldRearchive);

        if ($shouldRearchive) {
            $this->scheduleReArchiving($idSite, $idFunnel);
        }

        return $idFunnel;
    }

    /**
     * Saves a funnel not tied to a goal.
     *
     * @param int $idSite
     * @param int $idFunnel ID of the funnel since we can't use the idSite and idGoal to identify it
     * @param string $funnelName The name used to identify the funnel since it's not tied to a goal
     * @param array $steps Definitions of each funnel step.Definitions of each funnel step.
     * E.g. [{'position': 1, 'name': 'Step1', 'pattern_type': 'path_contains', 'pattern': 'path/dir', 'required': 0}]
     *
     * @return int   The id of the created or updated funnel
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.saveNonGoalFunnel",
     *     operationId="Funnels.saveNonGoalFunnel",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="idSite",
     *         in="query",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="idFunnel",
     *         in="query",
     *         required=true,
     *         description="ID of the funnel since we can't use the idSite and idGoal to identify it",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="funnelName",
     *         in="query",
     *         required=true,
     *         description="The name used to identify the funnel since it's not tied to a goal",
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="steps",
     *         in="query",
     *         required=true,
     *         description="Definitions of each funnel step.Definitions of each funnel step. E.g. [{'position': 1, 'name': 'Step1', 'pattern_type': 'path_contains', 'pattern': 'path/dir', 'required': 0}]",
     *         @OA\Schema(
     *             type="array",
     *             @OA\Items()
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="The id of the created or updated funnel",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    public function saveNonGoalFunnel(int $idSite, int $idFunnel, string $funnelName, array $steps): int
    {
        // At this point we aren't going to activate/deactivate funnels, so it's always activated
        $isActivated = true;
        $this->validator->checkWritePermission($idSite);
        $steps = $this->unsanitizeSteps($steps);
        $this->validator->validateFunnelConfiguration($isActivated, $steps);

        $now = Date::now()->getDatetime();
        $isActivated = !empty($isActivated);

        if (empty($steps)) {
            $steps = [];
        }

        $shouldReArchive = $idFunnel === 0;
        // If this is an existing funnel, let's see if the steps have changed
        if (!$shouldReArchive) {
            $funnel = $this->funnels->getFunnel($idFunnel);
            // Check the persisted site ID in case they provided a different site ID in the request
            $this->funnels->checkFunnelMatchesSite($idSite, $funnel);
            if (!empty($funnel['steps']) && $steps != $funnel['steps']) {
                $shouldReArchive = true;
            }
        }

        // remove invalidations for the funnel if any are queued since we're about to schedule re-archiving
        if ($idFunnel > 0) {
            $this->removeInvalidationsSafely($idSite, $idFunnel);
        }

        $idFunnel = $this->funnels->saveNonGoalFunnel($idSite, $idFunnel, $isActivated, $steps, $now, $funnelName, $shouldReArchive);

        if ($shouldReArchive) {
            $this->scheduleReArchiving($idSite, $idFunnel);
        }

        return $idFunnel;
    }

    private function unsanitizeSteps($steps)
    {
        if (!empty($steps) && is_array($steps)) {
            foreach ($steps as $index => $step) {
                if (!empty($step['pattern']) && is_string($step['pattern'])) {
                    $steps[$index]['pattern'] = Common::unsanitizeInputValue($step['pattern']);
                }
            }
        }

        return $steps;
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Get a list of available pattern types that can be used to configure a funnel step.
     *
     * @return array
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.getAvailablePatternMatches",
     *     operationId="Funnels.getAvailablePatternMatches",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.getAvailablePatternMatches&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.getAvailablePatternMatches&format=JSON&token_auth=anonymous), TSV (N/A)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"goal":{"comparisonName":"Goal","conditions":{"row":{"key":"goal_equals","value":"equals","example":"4"}}},"url":{"comparisonName":"URL","conditions":{"row":{{"key":"url_equals","value":"equals","example":"example.com\/cart\/web\/"},{"key":"url_contains","value":"contains","example":"example.com\/cart"},{"key":"url_startswith","value":"starts with","example":"example.co.\/cart\/"},{"key":"url_endswith","value":"ends with","example":"\/web\/"},{"key":"url_regexp","value":"matches the expression","example":"^example.*cart.*"}}}},"path":{"comparisonName":"Path","conditions":{"row":{{"key":"path_equals","value":"equals","example":"\/cart\/web\/"},{"key":"path_contains","value":"contains","example":"cart"},{"key":"path_startswith","value":"starts with","example":"\/cart\/web\/"},{"key":"path_endswith","value":"ends with","example":"\/web\/page.html"}}}},"query":{"comparisonName":"Search query","conditions":{"row":{"key":"query_contains","value":"contains","example":"page=cart"}}},"pagetitle":{"comparisonName":"Page Title","conditions":{"row":{{"key":"pagetitle_equals","value":"equals","example":"title"},{"key":"pagetitle_contains","value":"contains","example":"title"},{"key":"pagetitle_startswith","value":"starts with","example":"title"},{"key":"pagetitle_endswith","value":"ends with","example":"title"}}}},"eventcategory":{"comparisonName":"Event Category","conditions":{"row":{{"key":"eventcategory_equals","value":"equals","example":"category"},{"key":"eventcategory_contains","value":"contains","example":"category"},{"key":"eventcategory_startswith","value":"starts with","example":"category"},{"key":"eventcategory_endswith","value":"ends with","example":"category"}}}},"eventname":{"comparisonName":"Event Name","conditions":{"row":{{"key":"eventname_equals","value":"equals","example":"name"},{"key":"eventname_contains","value":"contains","example":"name"},{"key":"eventname_startswith","value":"starts with","example":"name"},{"key":"eventname_endswith","value":"ends with","example":"name"}}}},"eventaction":{"comparisonName":"Event Action","conditions":{"row":{{"key":"eventaction_equals","value":"equals","example":"action"},{"key":"eventaction_contains","value":"contains","example":"action"},{"key":"eventaction_startswith","value":"starts with","example":"action"},{"key":"eventaction_endswith","value":"ends with","example":"action"}}}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="goal",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="url",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="path",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="query",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="pagetitle",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="eventcategory",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="eventname",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="eventaction",
     *                     type="object",
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="object",
     *                         @OA\Property(
     *                             property="row",
     *                             type="array",
     *                             @OA\Items(
     *                                 type="object",
     *                                 @OA\Xml(name="row"),
     *                                 additionalProperties=true
     *                             )
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"goal":{"comparisonName":"Goal","conditions":{{"key":"goal_equals","value":"equals","example":"4"}}},"url":{"comparisonName":"URL","conditions":{{"key":"url_equals","value":"equals","example":"example.com\/cart\/web\/"},{"key":"url_contains","value":"contains","example":"example.com\/cart"},{"key":"url_startswith","value":"starts with","example":"example.co.\/cart\/"},{"key":"url_endswith","value":"ends with","example":"\/web\/"},{"key":"url_regexp","value":"matches the expression","example":"^example.*cart.*"}}},"path":{"comparisonName":"Path","conditions":{{"key":"path_equals","value":"equals","example":"\/cart\/web\/"},{"key":"path_contains","value":"contains","example":"cart"},{"key":"path_startswith","value":"starts with","example":"\/cart\/web\/"},{"key":"path_endswith","value":"ends with","example":"\/web\/page.html"}}},"query":{"comparisonName":"Search query","conditions":{{"key":"query_contains","value":"contains","example":"page=cart"}}},"pagetitle":{"comparisonName":"Page Title","conditions":{{"key":"pagetitle_equals","value":"equals","example":"title"},{"key":"pagetitle_contains","value":"contains","example":"title"},{"key":"pagetitle_startswith","value":"starts with","example":"title"},{"key":"pagetitle_endswith","value":"ends with","example":"title"}}},"eventcategory":{"comparisonName":"Event Category","conditions":{{"key":"eventcategory_equals","value":"equals","example":"category"},{"key":"eventcategory_contains","value":"contains","example":"category"},{"key":"eventcategory_startswith","value":"starts with","example":"category"},{"key":"eventcategory_endswith","value":"ends with","example":"category"}}},"eventname":{"comparisonName":"Event Name","conditions":{{"key":"eventname_equals","value":"equals","example":"name"},{"key":"eventname_contains","value":"contains","example":"name"},{"key":"eventname_startswith","value":"starts with","example":"name"},{"key":"eventname_endswith","value":"ends with","example":"name"}}},"eventaction":{"comparisonName":"Event Action","conditions":{{"key":"eventaction_equals","value":"equals","example":"action"},{"key":"eventaction_contains","value":"contains","example":"action"},{"key":"eventaction_startswith","value":"starts with","example":"action"},{"key":"eventaction_endswith","value":"ends with","example":"action"}}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(
     *                     property="eventaction",
     *                     type="object",
     *                     @OA\Property(property="comparisonName", type="string"),
     *                     @OA\Property(
     *                         property="conditions",
     *                         type="array",
     *                         @OA\Items(
     *                             type="object",
     *                             additionalProperties=true,
     *                             @OA\Property(
     *                                 type="object",
     *                                 @OA\Property(property="key", type="string"),
     *                                 @OA\Property(property="value", type="string"),
     *                                 @OA\Property(property="example", type="string")
     *                             )
     *                         )
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function getAvailablePatternMatches()
    {
        $this->validator->checkHasSomeWritePermission();

        return Pattern::getSupportedPatterns();
    }

    // phpcs:disable Generic.Files.LineLength
    /**
     * Tests whether a URL matches any of the step patterns.
     *
     * @param string $url A value used to filter funnel flow by. E.g. URL, path, event category, event name, page title,
     * goal ID, ... [@example="https://www.example.com/path/dir"]
     * @param array $steps Definitions of funnel steps.
     * [@example=[{"position": 1, "name": "Step1", "pattern_type": "path_contains", "pattern": "path/dir", "required": 0}]]
     * @return array
     * @throws Exception
     *
     * @OA\Get(
     *     path="/index.php?module=API&method=Funnels.testUrlMatchesSteps",
     *     operationId="Funnels.testUrlMatchesSteps",
     *     tags={"Funnels"},
     *     @OA\Parameter(ref="#/components/parameters/formatOptional"),
     *     @OA\Parameter(
     *         name="url",
     *         in="query",
     *         required=true,
     *         description="A value used to filter funnel flow by. E.g. URL, path, event category, event name, page title, goal ID, ...",
     *         @OA\Schema(
     *             type="string",
     *             example="https://www.example.com/path/dir"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="steps",
     *         in="query",
     *         required=true,
     *         description="Definitions of funnel steps.",
     *         @OA\Schema(
     *             type="array",
     *             example={{"position": 1, "name": "Step1", "pattern_type": "path_contains", "pattern": "path/dir", "required": 0}},
     *             @OA\Items()
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Example links: [XML](https://demo.matomo.cloud/?module=API&method=Funnels.testUrlMatchesSteps&url=https%3A%2F%2Fwww.example.com%2Fpath%2Fdir&steps%5B0%5D%5Bposition%5D=1&steps%5B0%5D%5Bname%5D=Step1&steps%5B0%5D%5Bpattern_type%5D=path_contains&steps%5B0%5D%5Bpattern%5D=path%2Fdir&steps%5B0%5D%5Brequired%5D=0&format=xml&token_auth=anonymous), [JSON](https://demo.matomo.cloud/?module=API&method=Funnels.testUrlMatchesSteps&url=https%3A%2F%2Fwww.example.com%2Fpath%2Fdir&steps%5B0%5D%5Bposition%5D=1&steps%5B0%5D%5Bname%5D=Step1&steps%5B0%5D%5Bpattern_type%5D=path_contains&steps%5B0%5D%5Bpattern%5D=path%2Fdir&steps%5B0%5D%5Brequired%5D=0&format=JSON&token_auth=anonymous), TSV (N/A)",
     *         @OA\MediaType(
     *             mediaType="text/xml",
     *             example={"url":"https:\/\/www.example.com\/path\/dir","tests":{"row":{"matches":"1","pattern_type":"path_contains","pattern":"path\/dir"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Xml(name="result"),
     *                 @OA\Property(
     *                     property="tests",
     *                     type="object",
     *                     @OA\Property(
     *                         property="row",
     *                         type="array",
     *                         @OA\Items(
     *                             type="object",
     *                             @OA\Xml(name="row"),
     *                             additionalProperties=true
     *                         )
     *                     )
     *                 )
     *             )
     *         ),
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             example={"url":"https:\/\/www.example.com\/path\/dir","tests":{{"matches":true,"pattern_type":"path_contains","pattern":"path\/dir"}}},
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(property="url", type="string"),
     *                 @OA\Property(
     *                     property="tests",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         additionalProperties=true,
     *                         @OA\Property(
     *                             type="object",
     *                             @OA\Property(property="matches", type="boolean"),
     *                             @OA\Property(property="pattern_type", type="string"),
     *                             @OA\Property(property="pattern", type="string")
     *                         )
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(response=400, ref="#/components/responses/BadRequest"),
     *     @OA\Response(response=401, ref="#/components/responses/Unauthorized"),
     *     @OA\Response(response=403, ref="#/components/responses/Forbidden"),
     *     @OA\Response(response=404, ref="#/components/responses/NotFound"),
     *     @OA\Response(response=500, ref="#/components/responses/ServerError"),
     *     @OA\Response(response="default", ref="#/components/responses/DefaultError")
     * )
     */
    // phpcs:enable Generic.Files.LineLength
    public function testUrlMatchesSteps($url, $steps)
    {
        Piwik::checkUserHasSomeViewAccess();

        if ($url === '' || $url === false || $url === null) {
            return array('url' => '', 'tests' => array());
        }

        if (!is_array($steps)) {
            throw new Exception(Piwik::translate('Funnels_ErrorNotAnArray', 'steps'));
        }

        $url = Common::unsanitizeInputValue($url);
        $steps = $this->unsanitizeSteps($steps);

        $results = array();

        foreach ($steps as $index => $step) {
            $stepInput = new Step($step, $index);
            $stepInput->checkPatternType();
            $stepInput->checkPattern();

            // Not need to make the database call since we can't really validate goals against a URL
            if (Pattern::TYPE_GOAL_EQUALS === $step['pattern_type']) {
                continue;
            }

            $matching = $this->pattern->matchesUrl($url, $step['pattern_type'], $step['pattern']);

            $results[] = array(
                'matches' => $matching,
                'pattern_type' => $step['pattern_type'],
                'pattern' => $step['pattern'],
            );
        }

        return array('url' => $url, 'tests' => $results);
    }

    /**
     * @param DataTable $root
     * @param string $step
     * @param int|string $idSubtable
     * @param string $record
     * @param int $idSite
     * @param string $period
     * @param string $date
     * @param string $segment
     * @param bool $expanded
     * @return DataTable
     */
    private function getStepTableFromParentTable(
        DataTable $root,
        $step,
        $idSubtable,
        $record,
        $idSite,
        $period,
        $date,
        $segment,
        $expanded,
        $flat
    ) {
        $stepRow = $root->getRowFromLabel($step);

        if (!empty($stepRow)) {
            $idSubtable = $stepRow->getIdSubDataTable();
        }

        if (empty($idSubtable)) {
            return new DataTable();
        }

        if ($expanded) {
            $idSubtable = null;
        }
        $stepTable = $this->getDataTable($record, $idSite, $period, $date, $segment, $expanded, $idSubtable, $flat);

        if ($expanded) {
            $stepRow = $stepTable->getRowFromLabel($step);
            $stepTable = $stepRow->getSubtable();
        }


        $stepTable->filter(
            'ColumnCallbackAddMetadata',
            array(
                'label',
                'url',
                function ($label) {
                    if (
                        $label === Archiver::LABEL_NOT_DEFINED
                        || $label === Archiver::LABEL_VISIT_ENTRY
                        || $label === Archiver::LABEL_VISIT_EXIT
                        || $label === DataTable::ID_SUMMARY_ROW
                        || $label === -2
                    ) { // totals row... cannot use constant since the constant was added only in recent versions
                        return false;
                    }

                    return $label;
                },
                $functionParams = null,
                $applyToSummary = false
            )
        );

        return $stepTable;
    }

    /**
     * Calls removeInvalidationsSafely() for all the numeric archive names
     *
     * @param int $idSite
     * @param int $idFunnel
     */
    private function removeInvalidationsSafely(int $idSite, int $idFunnel)
    {
        $funnel = $this->funnels->getFunnel($idFunnel);

        $archiveNames = Archiver::getAllRecordNames($idFunnel, $funnel['revision'] ?? 0);
        foreach ($archiveNames as $archiveName) {
            $this->archiveInvalidator->removeInvalidationsSafely([$idSite], 'Funnels', $archiveName);
        }
    }

    /**
     * Calls scheduleReArchiving() for all the numeric archive names
     *
     * @param int $idSite
     * @param int $idFunnel
     */
    private function scheduleReArchiving(int $idSite, int $idFunnel)
    {
        // Invalidate the funnel options for the site so that the log_funnel records will be rebuilt
        // Since we're invalidating all archives for this funnel, we should also invalidate all options
        StaticContainer::get(LogFunnelOptionLogic::class)->invalidateFunnelOptionsForSite($idSite, true);

        $funnel = $this->funnels->getFunnel($idFunnel);

        $archiveNames = Archiver::getAllRecordNames($idFunnel, $funnel['revision']);
        foreach ($archiveNames as $archiveName) {
            $this->archiveInvalidator->scheduleReArchiving([$idSite], 'Funnels', $archiveName);
        }
    }
}

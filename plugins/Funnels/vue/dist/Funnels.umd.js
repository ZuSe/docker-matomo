(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("Goals"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", "Goals", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["Funnels"] = factory(require("CoreHome"), require("Goals"), require("vue"), require("CorePluginsAdmin"));
	else
		root["Funnels"] = factory(root["CoreHome"], root["Goals"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__76d2__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "plugins/Funnels/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "6ec9":
/***/ (function(module, exports) {

function formatNumber(value) {
  if (!value) {
    return '0';
  }
  return value.toLocaleString();
}
function formatAbbr(value) {
  if (!value) {
    return '0';
  }
  if (value >= 99950000) {
    // For hundreds of millions
    return `${Math.round(value / 1000000)}m`;
  }
  if (value >= 999500) {
    // For millions
    return `${(Math.round(value / 100000) / 10).toFixed(1)}m`;
  }
  if (value >= 99950) {
    // For hundreds of thousands
    return `${Math.round(value / 1000)}k`;
  }
  if (value >= 1000) {
    // For thousands
    return `${(Math.round(value / 100) / 10).toFixed(1)}k`;
  }
  return value.toString();
}
module.exports = {
  formatNumber,
  formatAbbr
};

/***/ }),

/***/ "76d2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__76d2__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ManageFunnel", function() { return /* reexport */ ManageFunnel; });
__webpack_require__.d(__webpack_exports__, "SalesFunnel", function() { return /* reexport */ SalesFunnel; });
__webpack_require__.d(__webpack_exports__, "FunnelPageLink", function() { return /* reexport */ FunnelPageLink_FunnelPageLink; });
__webpack_require__.d(__webpack_exports__, "FunnelSummary", function() { return /* reexport */ FunnelSummary; });
__webpack_require__.d(__webpack_exports__, "GoalFunnelReport", function() { return /* reexport */ GoalFunnelReport; });
__webpack_require__.d(__webpack_exports__, "ManageSiteFunnels", function() { return /* reexport */ ManageSiteFunnels; });
__webpack_require__.d(__webpack_exports__, "FunnelConversionReport", function() { return /* reexport */ FunnelConversionReport; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/ManageFunnel/ManageFunnel.vue?vue&type=template&id=3170d2f5

const _hoisted_1 = {
  class: "alert alert-info"
};
const _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const _hoisted_3 = ["value"];
const _hoisted_4 = {
  class: "activateFunnel"
};
const _hoisted_5 = {
  class: "manageFunnel"
};
const _hoisted_6 = {
  class: "stepHeading"
};
const _hoisted_7 = {
  class: "funnelsTable",
  ref: "funnelsTable"
};
const _hoisted_8 = ["title"];
const _hoisted_9 = ["title"];
const _hoisted_10 = {
  class: "stepName"
};
const _hoisted_11 = {
  class: "stepPattern"
};
const _hoisted_12 = {
  class: "stepRequired"
};
const _hoisted_13 = ["title", "onClick"];
const _hoisted_14 = ["title", "onClick"];
const _hoisted_15 = {
  key: 0,
  class: "step inactive"
};
const _hoisted_16 = {
  class: "stepName"
};
const _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, null, -1);
const _hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, null, -1);
const _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, null, -1);
const _hoisted_20 = {
  class: "stepRequired"
};
const _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, null, -1);
const _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, null, -1);
const _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  id: "funnelValidationError"
}, null, -1);
const _hoisted_24 = {
  class: "tableActionBar"
};
const _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const _hoisted_26 = {
  class: "targetValidator"
};
const _hoisted_27 = {
  class: "urlField"
};
const _hoisted_28 = {
  class: "loadingPiwik loadingMatchingSteps"
};
const _hoisted_29 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
  src: "plugins/Morpheus/images/loading-blue.gif",
  alt: ""
}, null, -1);
const _hoisted_30 = {
  class: "ui-confirm",
  ref: "infoFunnelIsLocked"
};
const _hoisted_31 = ["value"];
const _hoisted_32 = ["value"];
const _hoisted_33 = {
  class: "ui-confirm",
  ref: "cannotActivateIncompleteSteps"
};
const _hoisted_34 = ["value"];
const _hoisted_35 = {
  class: "ui-confirm",
  ref: "confirmUnlockFunnel"
};
const _hoisted_36 = ["value"];
const _hoisted_37 = ["value"];
const _hoisted_38 = {
  class: "ui-confirm",
  ref: "confirmDeactivateFunnel"
};
const _hoisted_39 = ["value"];
const _hoisted_40 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_WarningFunnelIsActivatedRequiredUnlock')) + " ", 1), _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "button",
    class: "btn unlockFunnel",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.unlockFunnel()),
    value: _ctx.translate('Funnels_Unlock')
  }, null, 8, _hoisted_3)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLocked]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [!_ctx.isHideEnable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Field, {
    key: 0,
    uicontrol: "checkbox",
    name: "activateFunnel",
    "model-value": _ctx.funnel.activated,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.toggleFunnelActivated($event)),
    "model-modifiers": {
      abortable: true
    },
    title: _ctx.translate('Funnels_EnableFunnel'),
    "inline-help": _ctx.getEnableFunnelHelpText,
    disabled: _ctx.isLocked
  }, null, 8, ["model-value", "title", "inline-help", "disabled"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoading
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "alert alert-warning"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_WarningOnUpdateReportNeedsArchiving')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isUnlocked]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Steps')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Step')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ComparisonColumnTitle')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Condition')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Goals_Pattern')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "icon-info header-help",
    title: _ctx.translate('Funnels_PatternHelpText')
  }, null, 8, _hoisted_8)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_RequiredColumnTitle')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "icon-info header-help required-help-icon",
    title: _ctx.getRequiredHelpText
  }, null, 8, _hoisted_9)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Help')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Remove')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.funnel.steps, (step, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`step step${index + 1} ${_ctx.matches[index]} ${_ctx.isLocked ? 'inactive' : ''}`),
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(index + 1), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      placeholder: _ctx.translate('Funnels_StepName'),
      name: `stepName${index + 1}`,
      modelValue: step.name,
      "onUpdate:modelValue": $event => step.name = $event,
      maxlength: 150,
      "full-width": true,
      disabled: _ctx.isLocked
    }, null, 8, ["placeholder", "name", "modelValue", "onUpdate:modelValue", "disabled"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "patternComparison",
      "model-value": step.patternComparison,
      "onUpdate:modelValue": $event => {
        _ctx.updatePatternType(step.patternComparison, $event, index);
        step.patternComparison = $event;
        _ctx.validateSteps();
      },
      disabled: _ctx.isLocked,
      "full-width": true,
      options: _ctx.patterns
    }, null, 8, ["model-value", "onUpdate:modelValue", "disabled", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: "pattern_type",
      "model-value": step.pattern_type,
      "onUpdate:modelValue": $event => {
        step.pattern_type = $event;
        _ctx.validateSteps();
      },
      disabled: _ctx.isLocked,
      "full-width": true,
      options: _ctx.patternConditions(step.patternComparison)
    }, null, 8, ["model-value", "onUpdate:modelValue", "disabled", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      "model-value": step.pattern,
      "onUpdate:modelValue": $event => {
        step.pattern = $event;
        _ctx.validateSteps();
      },
      name: `stepPattern${index}${1}`,
      maxlength: 1000,
      "full-width": true,
      disabled: _ctx.isLocked,
      placeholder: _ctx.patternExamples[step.pattern_type],
      hidden: step.patternComparison === 'goal'
    }, null, 8, ["model-value", "onUpdate:modelValue", "name", "disabled", "placeholder", "hidden"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "select",
      name: `stepPattern${index}${1}`,
      options: _ctx.goals,
      "model-value": step.pattern,
      "onUpdate:modelValue": $event => {
        step.pattern = $event;
        _ctx.validateSteps();
      },
      disabled: _ctx.isLocked,
      hidden: step.patternComparison !== 'goal',
      "full-width": true
    }, null, 8, ["name", "options", "model-value", "onUpdate:modelValue", "disabled", "hidden"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "checkbox",
      name: `stepRequired${index}${1}`,
      modelValue: step.required,
      "onUpdate:modelValue": $event => step.required = $event,
      disabled: _ctx.isLocked
    }, null, 8, ["name", "modelValue", "onUpdate:modelValue", "disabled"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["icon-info table-action", {
        helpHidden: step.patternComparison === 'goal'
      }]),
      title: _ctx.translate('Funnels_HelpStepTooltip'),
      onClick: $event => _ctx.showHelpForStep(index)
    }, null, 10, _hoisted_13)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-minus table-action",
      title: _ctx.translate('Funnels_RemoveStepTooltip'),
      onClick: $event => _ctx.removeStep(index)
    }, null, 8, _hoisted_14), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.funnel.steps.length > 1]])])], 2);
  }), 128)), !_ctx.isNonGoalFunnel || _ctx.isSalesFunnel ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.funnel.steps.length + 1), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    modelValue: _ctx.getGoalName,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.getGoalName = $event),
    "full-width": true,
    disabled: true
  }, null, 8, ["modelValue"])])]), _hoisted_17, _hoisted_18, _hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "checkbox",
    modelValue: _ctx.isGoalRequired,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.isGoalRequired = $event),
    disabled: true
  }, null, 8, ["modelValue"])])]), _hoisted_21, _hoisted_22])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading], [_directive_content_table]]), _hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "addNewStep",
    onClick: _cache[4] || (_cache[4] = $event => _ctx.addStep())
  }, [_hoisted_25, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_AddStep')), 1)])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "text",
    name: "urlField",
    title: _ctx.translate('Funnels_ValidateStepsOptional'),
    placeholder: "https://www.example.com",
    "model-value": _ctx.validateUrl,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => {
      _ctx.validateUrl = $event;
      _ctx.validateSteps();
    }),
    onClick: _cache[6] || (_cache[6] = $event => _ctx.prefillValidateUrl()),
    "inline-help": _ctx.getTestUrlHelpText
  }, null, 8, ["title", "model-value", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_28, [_hoisted_29, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_LoadingData')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isLoadingMatchingSteps]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "alert alert-warning"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_WarningOnUpdateReportNeedsArchiving')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isUnlocked]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_InfoFunnelIsLocked')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "unlock",
    type: "button",
    value: _ctx.translate('Funnels_Unlock')
  }, null, 8, _hoisted_31), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "ok",
    type: "button",
    value: _ctx.translate('General_Cancel')
  }, null, 8, _hoisted_32)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_33, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_InfoCannotActivateFunnelIncomplete')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "ok",
    type: "button",
    value: _ctx.translate('General_Ok')
  }, null, 8, _hoisted_34)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_35, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ConfirmUnlockFunnel')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_36), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_37)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ConfirmDeactivateFunnel')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_39), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_40)], 512)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.funnel.activated]])], 64);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageFunnel/ManageFunnel.vue?vue&type=template&id=3170d2f5

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// EXTERNAL MODULE: external "Goals"
var external_Goals_ = __webpack_require__("76d2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/ManageFunnel/ManageFunnel.vue?vue&type=script&lang=ts




/* harmony default export */ var ManageFunnelvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    showGoal: Number,
    isHideEnable: {
      type: Boolean,
      default: false
    },
    isSalesFunnel: {
      type: Boolean,
      default: false
    },
    isNonGoalFunnel: {
      type: Boolean,
      default: false
    },
    goals: {
      type: Array,
      required: true
    }
  },
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    Field: external_CorePluginsAdmin_["Field"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  data() {
    return {
      funnel: {},
      isLoading: false,
      patternMatchOptions: [],
      isLocked: false,
      isUnlocked: false,
      matches: {},
      validateUrl: '',
      isLoadingMatchingSteps: false,
      isGoalRequired: true
    };
  },
  created() {
    // we wait for 200ms before actually sending a request as user might be still typing
    this.fetchMatchingSteps = Object(external_CoreHome_["debounce"])(this.fetchMatchingSteps, 200);
    const idGoal = external_Goals_["ManageGoalsStore"].idGoal.value || this.showGoal;
    if ((!this.isNonGoalFunnel || this.isSalesFunnel) && typeof idGoal === 'number') {
      this.initGoalForm('Goals.updateGoal', idGoal, '');
    }
    external_CoreHome_["AjaxHelper"].fetch({
      method: 'Funnels.getAvailablePatternMatches'
    }).then(response => {
      this.patternMatchOptions = response;
    });
    this.reset();
    // Only listen for the events related to the parent view in order to avoid confusion
    if (this.isSalesFunnel) {
      external_CoreHome_["Matomo"].on('Funnels.beforeUpdateSalesFunnel', this.onSetFunnel);
    }
    if (this.isNonGoalFunnel && !this.isSalesFunnel) {
      external_CoreHome_["Matomo"].on('Funnels.resetForm', () => this.resetForm());
      external_CoreHome_["Matomo"].on('Funnels.initFunnelForm', this.initFunnelForm.bind(this));
      external_CoreHome_["Matomo"].on('Funnels.beforeUpdateFunnel', this.onSetFunnel);
    }
    if (!this.isNonGoalFunnel) {
      external_CoreHome_["Matomo"].on('Goals.beforeInitGoalForm', this.initGoalForm.bind(this));
      external_CoreHome_["Matomo"].on('Goals.beforeAddGoal', this.onSetFunnel.bind(this));
      external_CoreHome_["Matomo"].on('Goals.beforeUpdateGoal', this.onSetFunnel.bind(this));
      external_CoreHome_["Matomo"].on('Goals.cancelForm', () => this.resetForm());
      external_CoreHome_["Matomo"].on('Goals.goalNameChanged', this.updateGoalName.bind(this));
    }
  },
  updated() {
    this.$nextTick(() => {
      if (!this.isSalesFunnel) {
        this.scrollToFunnelsTable();
        return;
      }
      // If it's a sales funnel, give the other reports a second to load before scrolling
      setTimeout(() => {
        this.scrollToFunnelsTable();
      }, 1000);
    });
  },
  unmounted() {
    // Remove the onSetFunnel listeners otherwise they might accidentally double up
    if (this.isSalesFunnel) {
      external_CoreHome_["Matomo"].off('Funnels.beforeUpdateSalesFunnel', this.onSetFunnel);
    }
    if (this.isNonGoalFunnel && !this.isSalesFunnel) {
      external_CoreHome_["Matomo"].off('Funnels.beforeUpdateFunnel', this.onSetFunnel);
    }
  },
  methods: {
    testUrlMatchesSteps: external_CoreHome_["AjaxHelper"].oneAtATime('Funnels.testUrlMatchesSteps', {
      errorElement: '#funnelValidationError'
    }),
    getGoalFunnel: external_CoreHome_["AjaxHelper"].oneAtATime('Funnels.getGoalFunnel'),
    getFunnel: external_CoreHome_["AjaxHelper"].oneAtATime('Funnels.getFunnel'),
    doUnlock() {
      this.isLocked = false;
      this.isUnlocked = true;
    },
    confirmFunnelIsLocked() {
      return new Promise(resolve => {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.infoFunnelIsLocked, {
          unlock: () => {
            this.doUnlock();
            resolve();
          }
        });
      });
    },
    addStep() {
      var _this$funnel$steps;
      if (!this.funnel) {
        return;
      }
      if (this.isLocked) {
        this.confirmFunnelIsLocked().then(() => {
          this.addStep();
        });
        return;
      }
      if (!((_this$funnel$steps = this.funnel.steps) !== null && _this$funnel$steps !== void 0 && _this$funnel$steps.length)) {
        this.funnel.steps = [];
      }
      this.funnel.steps = [...this.funnel.steps, {
        name: '',
        pattern: '',
        pattern_type: 'path_equals',
        patternComparison: 'path',
        required: true
      }];
    },
    removeStep(index) {
      var _this$funnel;
      if (!this.funnel) {
        return;
      }
      if (this.isLocked) {
        this.confirmFunnelIsLocked().then(() => {
          this.removeStep(index);
        });
        return;
      }
      if (index > -1 && (_this$funnel = this.funnel) !== null && _this$funnel !== void 0 && _this$funnel.steps) {
        this.removeTooltipForStep(index + 1);
        const newSteps = [...this.funnel.steps];
        newSteps.splice(index, 1);
        this.funnel.steps = newSteps;
      }
      this.validateSteps();
    },
    removeTooltipForStep(stepNumber) {
      const selector = `table.funnelsTable tr.step${stepNumber} span.icon-minus`;
      const removeStepIcon = document.querySelectorAll(selector)[0];
      const tooltipId = removeStepIcon.getAttribute('aria-describedby');
      if (!tooltipId) {
        return;
      }
      const tooltipElement = document.getElementById(tooltipId);
      if (!tooltipElement) {
        return;
      }
      tooltipElement.remove();
    },
    prefillValidateUrl() {
      if (!this.validateUrl) {
        this.validateUrl = 'https://www.';
      }
    },
    fetchMatchingSteps() {
      var _this$funnel2;
      const url = this.validateUrl;
      if (!url || !((_this$funnel2 = this.funnel) !== null && _this$funnel2 !== void 0 && (_this$funnel2 = _this$funnel2.steps) !== null && _this$funnel2 !== void 0 && _this$funnel2.length) || !this.stepsWithPattern.length) {
        return;
      }
      this.isLoadingMatchingSteps = true;
      this.testUrlMatchesSteps({
        url
      }, {
        steps: this.stepsWithPattern
      }).then(response => {
        var _this$funnel3;
        if (!((_this$funnel3 = this.funnel) !== null && _this$funnel3 !== void 0 && _this$funnel3.steps)) {
          return;
        }
        if (!(response !== null && response !== void 0 && response.url) || !(response !== null && response !== void 0 && response.tests) || response.url !== this.validateUrl) {
          return;
        }
        this.funnel.steps.forEach((step, i) => {
          response.tests.forEach(test => {
            // we do not test for step positions as the patterns might have changed and this way
            // we always show a correct result whether something matches even if value changed
            // since sending the request
            if (test && step.pattern === test.pattern && step.pattern_type === test.pattern_type) {
              this.matches[i] = test.matches ? 'validateMatch' : 'validateMismatch';
            }
          });
        });
      }).finally(() => {
        this.isLoadingMatchingSteps = false;
      });
    },
    cannotActivateIncompleteSteps() {
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.cannotActivateIncompleteSteps, {});
    },
    validateSteps() {
      var _this$funnel$steps2;
      this.matches = {
        1: ''
      };
      if (!((_this$funnel$steps2 = this.funnel.steps) !== null && _this$funnel$steps2 !== void 0 && _this$funnel$steps2.length)) {
        return;
      }
      this.matches = this.funnel.steps.map(() => 'noValidation');
      if (!this.validateUrl) {
        return;
      }
      this.fetchMatchingSteps();
    },
    updatePatternType(oldPatternComparison, newPatternComparison, index) {
      const patternConditions = this.patternConditions(newPatternComparison);
      const patternConditionFirstKey = Object.keys(patternConditions)[0];
      this.funnel.steps[index].pattern_type = patternConditionFirstKey;
      if (newPatternComparison === 'goal' && this.funnel.steps[index].patternComparison === oldPatternComparison) {
        const goal = this.goals[0];
        this.funnel.steps[index].pattern = goal.key;
      } else {
        this.funnel.steps[index].pattern = '';
      }
    },
    unlockFunnel() {
      if (!this.funnel) {
        return;
      }
      if (this.isLocked) {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmUnlockFunnel, {
          yes: () => {
            this.doUnlock();
          }
        });
      }
    },
    toggleFunnelActivated(event) {
      if (!this.funnel) {
        return;
      }
      if (this.isLocked && event) {
        event.abort();
        // undo toggle change from checkbox
        this.confirmFunnelIsLocked().then(() => {
          this.toggleFunnelActivated(event);
        });
        return;
      }
      if (this.funnel.activated) {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmDeactivateFunnel, {
          yes: () => {
            this.funnel.activated = false;
          },
          no: () => {
            event.abort();
            this.funnel.activated = true;
          }
        });
      } else {
        this.funnel.activated = true;
      }
    },
    showHelpForStep(index) {
      var _this$funnel4;
      const step = (_this$funnel4 = this.funnel) === null || _this$funnel4 === void 0 || (_this$funnel4 = _this$funnel4.steps) === null || _this$funnel4 === void 0 ? void 0 : _this$funnel4[index];
      const hasPatternAndType = (step === null || step === void 0 ? void 0 : step.pattern) && (step === null || step === void 0 ? void 0 : step.pattern_type);
      const url = external_CoreHome_["MatomoUrl"].stringify({
        module: 'Funnels',
        action: 'stepHelp',
        pattern: hasPatternAndType ? step.pattern : undefined,
        pattern_type: hasPatternAndType ? step.pattern_type : undefined
      });
      const help = Object(external_CoreHome_["translate"])('General_Help');
      Piwik_Popover.createPopupAndLoadUrl(url, help, 'funnelStepHelp');
    },
    reset(skipAddStep = false) {
      // we need isActivated for the view handling, and activated for the funnel itself. Because
      // we listen to ng-change / ng-click it would be confusing otherwise. we try to remove
      // isActivated later
      this.funnel = {
        activated: this.isNonGoalFunnel,
        steps: []
      };
      this.isLocked = false;
      this.isUnlocked = false;
      this.matches = {
        1: ''
      };
      this.validateUrl = '';
      if (!skipAddStep) {
        this.addStep();
      }
    },
    resetForm(skipAddStep = false) {
      this.reset(skipAddStep);
      this.isLoading = false;
    },
    initGoalForm(goalMethodAPI, goalId, goalName) {
      this.resetForm();
      if (goalId === '' || goalMethodAPI === 'Goals.addGoal') {
        return;
      }
      this.isLoading = true;
      this.getGoalFunnel({
        idGoal: goalId
      }).then(response => {
        if (!response) {
          return;
        }
        this.funnel = response;
        this.funnel.name = this.funnel.name ? this.funnel.name : goalName;
        if (!this.funnel.steps) {
          this.funnel.steps = [];
          this.addStep();
        }
        if (this.funnel.activated) {
          // we only allow save once user has confirmed to deactivate the funnel
          this.isLocked = true;
        } else {
          this.isLocked = false;
        }
        // If it's a sales funnel and the funnel doesn't exist yet, enable by default
        if (this.isNonGoalFunnel && typeof this.funnel.idfunnel === 'undefined') {
          this.funnel.activated = true;
        }
        this.validateSteps();
      }).finally(() => {
        this.isLoading = false;
      });
    },
    initFunnelForm(idSite, idFunnel) {
      this.resetForm(idFunnel > 0);
      if (idFunnel === 0) {
        return;
      }
      this.isLoading = true;
      // Have a slight delay to avoid potential race condition
      setTimeout(() => {
        this.getFunnel({
          idSite,
          idFunnel
        }).then(response => {
          if (!response) {
            return;
          }
          this.funnel = response;
          if (!this.funnel.steps) {
            this.funnel.steps = [];
            this.addStep();
          }
          if (this.funnel.activated) {
            // we only allow save once user has confirmed to deactivate the funnel
            this.isLocked = true;
          } else {
            this.isLocked = false;
          }
          this.validateSteps();
        }).finally(() => {
          this.isLoading = false;
        });
      }, 500);
    },
    onSetFunnel({
      parameters,
      options
    }) {
      var _this$funnel$steps3;
      if (!this.funnel || this.isLocked && (this.isSalesFunnel || this.isNonGoalFunnel)) {
        parameters.isLocked = this.isLocked;
        parameters.cancelRequest = true;
        return;
      }
      if (this.funnel.activated && !((_this$funnel$steps3 = this.funnel.steps) !== null && _this$funnel$steps3 !== void 0 && _this$funnel$steps3.length)) {
        this.cannotActivateIncompleteSteps();
        parameters.cancelRequest = true;
        return;
      }
      const isAStepMissingNameOrPattern = this.funnel.steps.some(s => this.isStepIncomplete(s));
      if (this.funnel.activated && isAStepMissingNameOrPattern) {
        this.cannotActivateIncompleteSteps();
        parameters.cancelRequest = true;
        return;
      }
      options.postParams = Object.assign(Object.assign({}, options.postParams), {}, {
        funnelSteps: this.stepsWithNameAndPattern,
        funnelActivated: this.funnel.activated ? '1' : '0'
      });
      if (this.isNonGoalFunnel) {
        options.postParams = Object.assign(Object.assign({}, options.postParams), {}, {
          steps: this.stepsWithNameAndPattern,
          isActivated: this.funnel.activated ? '1' : '0'
        });
        if (!this.isSalesFunnel && options.postParams.steps.length) {
          options.postParams.steps[options.postParams.steps.length - 1].required = 1;
        }
      }
    },
    isStepIncomplete(step) {
      return !step.name || !step.name.trim() || !step.pattern || !step.pattern.trim();
    },
    updateGoalName(goalName) {
      this.funnel.name = goalName;
    },
    scrollToFunnelsTable() {
      const element = this.$refs.funnelsTable;
      const params = Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value);
      if (params.scrollToFunnel && element) {
        delete params.scrollToFunnel;
        element.scrollIntoView();
      }
    },
    patternConditions(patternCondition) {
      const result = {};
      Object.entries(this.patternMatchOptions).forEach(([index, patternMatchOption]) => {
        if (index === patternCondition) {
          Object.values(patternMatchOption.conditions).forEach(condition => {
            result[condition.key] = condition.value;
          });
        }
      });
      return result;
    }
  },
  computed: {
    patternExamples() {
      const result = {};
      Object.values(this.patternMatchOptions).forEach(patternMatchOption => {
        Object.values(patternMatchOption.conditions).forEach(condition => {
          result[condition.key] = condition.example;
        });
      });
      return result;
    },
    patterns() {
      const result = {};
      Object.entries(this.patternMatchOptions).forEach(([index, patternMatchOption]) => {
        result[index] = patternMatchOption.comparisonName;
      });
      return result;
    },
    stepsWithPattern() {
      var _this$funnel$steps4;
      if (!((_this$funnel$steps4 = this.funnel.steps) !== null && _this$funnel$steps4 !== void 0 && _this$funnel$steps4.length)) {
        return [];
      }
      return this.funnel.steps.filter(step => step && step.pattern && step.pattern_type).map(s => Object.assign(Object.assign({}, s), {}, {
        required: s.required ? 1 : 0
      }));
    },
    stepsWithNameAndPattern() {
      let steps = this.stepsWithPattern;
      steps = steps.filter(s => s.name);
      return steps;
    },
    getEnableFunnelHelpText() {
      const helpLink = '<a target="_blank" rel="noreferrer noopener" href="https://matomo.org/faq/funnels/faq_22793/">';
      return Object(external_CoreHome_["translate"])('Funnels_EnableFunnelHelpText', helpLink, '</a>');
    },
    getGoalName() {
      if (this.isSalesFunnel) {
        return Object(external_CoreHome_["translate"])('Ecommerce_Sales');
      }
      return this.funnel.name ? this.funnel.name : Object(external_CoreHome_["translate"])('Goals_GoalName');
    },
    getTestUrlHelpText() {
      const testUrlHelpText = Object(external_CoreHome_["translate"])('Funnels_TestUrlHelpText');
      const testUrlHelpTextGoalComparison = Object(external_CoreHome_["translate"])('Funnels_TestUrlHelpTextGoalComparison', '<i>', '</i>');
      return `${testUrlHelpText} ${testUrlHelpTextGoalComparison}`;
    },
    getRequiredHelpText() {
      const note = Object(external_CoreHome_["translate"])('Funnels_RequiredStepsHelpTextNote', '<br><br><strong>', '</strong>');
      return Object(external_CoreHome_["translate"])('Funnels_RequiredStepsHelpTextNew') + note;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageFunnel/ManageFunnel.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageFunnel/ManageFunnel.vue



ManageFunnelvue_type_script_lang_ts.render = render

/* harmony default export */ var ManageFunnel = (ManageFunnelvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/SalesFunnel/SalesFunnel.vue?vue&type=template&id=29ea3416

const SalesFunnelvue_type_template_id_29ea3416_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-show"
}, null, -1);
const SalesFunnelvue_type_template_id_29ea3416_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const SalesFunnelvue_type_template_id_29ea3416_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const SalesFunnelvue_type_template_id_29ea3416_hoisted_4 = {
  class: "ui-confirm",
  ref: "funnelIsLockedCannotBeSaved"
};
const SalesFunnelvue_type_template_id_29ea3416_hoisted_5 = ["value"];
function SalesFunnelvue_type_template_id_29ea3416_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _component_ManageFunnel = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageFunnel");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    class: "toggleEditSalesFunnel",
    value: _ctx.translate('Funnels_EditSalesFunnel'),
    disabled: _ctx.showEditForm,
    onConfirm: _cache[0] || (_cache[0] = $event => _ctx.showEditForm = !_ctx.showEditForm),
    saving: _ctx.isLoading
  }, null, 8, ["value", "disabled", "saving"]), _ctx.idFunnel ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "btn",
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.openFunnelReport(_ctx.idFunnel), ["prevent"])),
    style: {
      "margin-left": "3.5px"
    }
  }, [SalesFunnelvue_type_template_id_29ea3416_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ViewSalesFunnelReport')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [SalesFunnelvue_type_template_id_29ea3416_hoisted_2, SalesFunnelvue_type_template_id_29ea3416_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageFunnel, {
    "show-goal": 0,
    "is-sales-funnel": true,
    "is-non-goal-funnel": true,
    goals: _ctx.goals
  }, null, 8, ["goals"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
    class: "saveSalesFunnel",
    onConfirm: _cache[2] || (_cache[2] = $event => _ctx.save()),
    saving: _ctx.isLoading
  }, null, 8, ["saving"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SalesFunnelvue_type_template_id_29ea3416_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelIsLockedCannotBeSaved')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Ok')
  }, null, 8, SalesFunnelvue_type_template_id_29ea3416_hoisted_5)], 512)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showEditForm]])]);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/SalesFunnel/SalesFunnel.vue?vue&type=template&id=29ea3416

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/SalesFunnel/SalesFunnel.vue?vue&type=script&lang=ts




/* harmony default export */ var SalesFunnelvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    idFunnel: {
      type: [String, Number],
      required: false,
      default: 0
    },
    isFunnelEdit: {
      type: Boolean,
      required: false,
      default: false
    },
    goals: {
      type: Array,
      required: true
    }
  },
  components: {
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    ManageFunnel: ManageFunnel
  },
  data() {
    return {
      isLoading: false,
      showEditForm: false
    };
  },
  methods: {
    openFunnelReport(reportId) {
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'Funnels_Funnels',
        subcategory: reportId
      }));
    },
    save() {
      const parameters = {
        method: 'Funnels.setGoalFunnel',
        idGoal: '0'
      };
      const options = {};
      external_CoreHome_["Matomo"].postEvent('Funnels.beforeUpdateSalesFunnel', {
        parameters,
        options
      });
      if (parameters && parameters.isLocked && this.$refs.funnelIsLockedCannotBeSaved) {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.funnelIsLockedCannotBeSaved, {});
        return;
      }
      if (parameters.cancelRequest) {
        return;
      }
      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].fetch(parameters, options).then(() => {
        window.location.reload();
      }).catch(() => {
        this.isLoading = false;
      });
    }
  },
  mounted() {
    if (this.isFunnelEdit) {
      this.showEditForm = true;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/SalesFunnel/SalesFunnel.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/SalesFunnel/SalesFunnel.vue



SalesFunnelvue_type_script_lang_ts.render = SalesFunnelvue_type_template_id_29ea3416_render

/* harmony default export */ var SalesFunnel = (SalesFunnelvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/FunnelPageLink/FunnelPageLink.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

const {
  $
} = window;
// usage v-funnel-page-link="{ idFunnel: 5 }"
const FunnelPageLink = {
  mounted(el, binding) {
    if (!external_CoreHome_["Matomo"].helper.isReportingPage()) {
      return;
    }
    let link = $(el);
    if (el.tagName.toLowerCase() !== 'a') {
      const headline = $(el).text();
      $(el).html('<a></a>');
      link = $(el).find('a');
      link.text(headline);
    }
    link.bind('click', e => {
      e.preventDefault();
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'Funnels_Funnels',
        subcategory: binding.value.idFunnel
      }));
    });
  }
};
/* harmony default export */ var FunnelPageLink_FunnelPageLink = (FunnelPageLink);
// manually handle occurrence of piwik-funnel-page-link on datatable html attributes since
// dataTable.js is not managed by vue.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
external_CoreHome_["Matomo"].on('Matomo.processDynamicHtml', $element => {
  $element.find('[piwik-funnel-page-link]').each((i, e) => {
    if ($(e).attr('piwik-funnel-page-link-handled')) {
      return;
    }
    const idFunnel = $(e).attr('piwik-funnel-page-link');
    if (idFunnel) {
      FunnelPageLink.mounted(e, {
        instance: null,
        value: {
          idFunnel
        },
        oldValue: null,
        modifiers: {},
        dir: {}
      });
    }
    $(e).attr('piwik-funnel-page-link-handled', '1');
  });
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/FunnelSummary/FunnelSummary.vue?vue&type=template&id=2d53509e

const FunnelSummaryvue_type_template_id_2d53509e_hoisted_1 = {
  class: "funnelsReport"
};
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_2 = {
  class: "funnelSummary"
};
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_3 = {
  key: 0
};
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile funnelOverviewLink"
}, null, -1);
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_5 = {
  key: 1
};
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-reporting-goal funnelOverviewLink"
}, null, -1);
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_7 = {
  key: 2
};
const FunnelSummaryvue_type_template_id_2d53509e_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-edit funnelOverviewLink"
}, null, -1);
function FunnelSummaryvue_type_template_id_2d53509e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    "content-title": _ctx.$sanitize(_ctx.funnel.name)
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelSummaryvue_type_template_id_2d53509e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelSummaryvue_type_template_id_2d53509e_hoisted_2, [_ctx.isVisitorLogEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelSummaryvue_type_template_id_2d53509e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      class: "funnelOverviewLink",
      onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.openSegmentedVisitorLog(), ["prevent"]))
    }, [FunnelSummaryvue_type_template_id_2d53509e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ShowFunnelVisitsLog')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.funnel.idgoal > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelSummaryvue_type_template_id_2d53509e_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      class: "funnelOverviewLink",
      onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.openGoalReport(), ["prevent"]))
    }, [FunnelSummaryvue_type_template_id_2d53509e_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ShowGoalReport')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelSummaryvue_type_template_id_2d53509e_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.editFunnel(), ["prevent"])),
      class: "funnelOverviewLink"
    }, [FunnelSummaryvue_type_template_id_2d53509e_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_EditFunnel')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])]),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/FunnelSummary/FunnelSummary.vue?vue&type=template&id=2d53509e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/FunnelSummary/FunnelSummary.vue?vue&type=script&lang=ts


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {
  SegmentedVisitorLog
} = window;
/* harmony default export */ var FunnelSummaryvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    funnel: {
      type: Object,
      required: true
    },
    goalsSummary: Object,
    isVisitorLogEnabled: Boolean,
    segment: String,
    patternTranslations: {
      type: Object,
      required: true
    },
    funnelFlow: {
      type: Object,
      required: true
    },
    isNonGoalFunnel: {
      type: Boolean,
      required: false,
      default: false
    },
    userCanEditFunnels: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"]
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"]
  },
  methods: {
    openSegmentedVisitorLog() {
      SegmentedVisitorLog.show('Funnel.getFunnelFlow', `funnels_name==${this.funnel.idfunnel}${this.segment ? `;${this.segment}` : ''}`, {});
    },
    openGoalReport() {
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'Goals_Goals',
        subcategory: this.funnel.idgoal
      }));
    },
    editFunnel() {
      const funnelToEdit = this.funnel;
      // If the funnel belongs to a goal, edit it using the goal edit form
      if (funnelToEdit.idgoal && funnelToEdit.idgoal !== '0') {
        external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
          category: 'Goals_Goals',
          subcategory: 'Goals_ManageGoals',
          idGoal: funnelToEdit.idgoal,
          scrollToFunnel: 1
        }));
        return;
      }
      // If the funnel is a sales funnel, redirect to the Ecommerce section to edit
      if (funnelToEdit.isSalesFunnel) {
        external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
          category: 'Goals_Ecommerce',
          subcategory: 'General_Overview',
          isFunnelEdit: true,
          scrollToFunnel: 1
        }));
        return;
      }
      external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
        category: 'Funnels_Funnels',
        subcategory: 'Funnels_ManageFunnels',
        idFunnel: funnelToEdit.idfunnel
      }));
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/FunnelSummary/FunnelSummary.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/FunnelSummary/FunnelSummary.vue



FunnelSummaryvue_type_script_lang_ts.render = FunnelSummaryvue_type_template_id_2d53509e_render

/* harmony default export */ var FunnelSummary = (FunnelSummaryvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/GoalFunnelReport/GoalFunnelReport.vue?vue&type=template&id=7871a1db

const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_1 = {
  key: 0,
  class: "reportFlow"
};
const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
  class: "funnelEntries"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
  class: "separator"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
  class: "funnelFlow"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
  class: "separator"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
  class: "funnelExits"
})])], -1);
const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_3 = {
  key: 1
};
const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_5 = {
  key: 0
};
const GoalFunnelReportvue_type_template_id_7871a1db_hoisted_6 = {
  key: 1
};
function GoalFunnelReportvue_type_template_id_7871a1db_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EnrichedHeadline = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("EnrichedHeadline");
  const _component_FunnelFlowRow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("FunnelFlowRow");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    class: "funnelsReport"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_EnrichedHeadline, {
      "feature-name": "Funnels",
      "inline-help": _ctx.translate('Funnels_GoalFunnelReportHelp')
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_GoalFunnelReport')), 1)]),
      _: 1
    }, 8, ["inline-help"])]), _ctx.funnelFlow.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", GoalFunnelReportvue_type_template_id_7871a1db_hoisted_1, [GoalFunnelReportvue_type_template_id_7871a1db_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.funnelFlow, (row, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_FunnelFlowRow, {
        key: index,
        row: row,
        "is-last-row": index === _ctx.funnelFlow.length - 1,
        "id-site": _ctx.idSite,
        funnel: _ctx.funnel,
        "is-visitor-log-enabled": _ctx.isVisitorLogEnabled,
        segment: _ctx.segment
      }, null, 8, ["row", "is-last-row", "id-site", "funnel", "is-visitor-log-enabled", "segment"]);
    }), 128))])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", GoalFunnelReportvue_type_template_id_7871a1db_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreHome_ThereIsNoDataForThisReport')), 1), GoalFunnelReportvue_type_template_id_7871a1db_hoisted_4, _ctx.hasBeenPurged ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", GoalFunnelReportvue_type_template_id_7871a1db_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreHome_DataForThisReportHasBeenPurged', _ctx.deleteReportsOlderThan)), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", GoalFunnelReportvue_type_template_id_7871a1db_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelReportNotGeneratedYet')), 1))]))]),
    _: 1
  });
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/GoalFunnelReport.vue?vue&type=template&id=7871a1db

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/GoalFunnelReport/FunnelFlowRow.vue?vue&type=template&id=490b389c

const FunnelFlowRowvue_type_template_id_490b389c_hoisted_1 = {
  colspan: "5",
  class: "stepLabel"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_2 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_3 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile",
  style: {
    "visibility": "hidden"
  }
}, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_5 = {
  key: 0,
  class: "icon-evolution",
  style: {
    "visibility": "hidden"
  }
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_6 = {
  key: 1
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_7 = {
  key: 2
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_8 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-visitor-profile segmentVisitorsByFunnelStep"
}, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_10 = [FunnelFlowRowvue_type_template_id_490b389c_hoisted_9];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_11 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-evolution"
}, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_13 = [FunnelFlowRowvue_type_template_id_490b389c_hoisted_12];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_14 = {
  class: "funnelEntries"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  class: "separator"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", {
  class: "entryArrow"
}, "→")], -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_17 = {
  class: "funnelFlow"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_18 = {
  key: 0
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_19 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "proceededArrow"
}, "↓", -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_23 = ["innerHTML"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_24 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_25 = {
  key: 1
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_26 = ["title"];
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_28 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "proceededArrow"
}, "↓", -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_29 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_30 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_31 = {
  class: "proceededRate"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_32 = {
  class: "separator"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_33 = {
  key: 0,
  class: "exitArrow"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_34 = {
  class: "funnelExits"
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_35 = {
  key: 0
};
const FunnelFlowRowvue_type_template_id_490b389c_hoisted_36 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function FunnelFlowRowvue_type_template_id_490b389c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WidgetLoader = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("WidgetLoader");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`step${_ctx.row.step_position}`)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FunnelFlowRowvue_type_template_id_490b389c_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", {
    class: "stepName",
    title: _ctx.row.step_definition
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.row.label), 9, FunnelFlowRowvue_type_template_id_490b389c_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", {
    class: "stepMetric",
    title: _ctx.row.step_nb_visits !== _ctx.row.step_nb_visits_actual ? _ctx.translate('Funnels_HitsWereBackfilled', _ctx.row.step_nb_visits_actual) : _ctx.translate('Funnels_HitsWereNotBackfilled')
  }, [FunnelFlowRowvue_type_template_id_490b389c_hoisted_4, !_ctx.isLastRow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelFlowRowvue_type_template_id_490b389c_hoisted_5)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.row.step_nb_visits === 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelFlowRowvue_type_template_id_490b389c_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.isLastRow ? _ctx.translate('Funnels_NbConversion', 1) : _ctx.translate('General_OneVisit')), 1)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelFlowRowvue_type_template_id_490b389c_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.isLastRow ? _ctx.translate('Goals_Conversions', _ctx.row.step_nb_visits) : _ctx.translate('General_NVisits', _ctx.row.step_nb_visits)), 1)), _ctx.isVisitorLogEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 3,
    href: "",
    title: _ctx.translate('Funnels_SegmentVisitorsByThisFunnelStep'),
    class: "segmentVisitors",
    onClick: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.openSegmentedVisitorLog(_ctx.row.step_position), ["prevent"]))
  }, FunnelFlowRowvue_type_template_id_490b389c_hoisted_10, 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isLastRow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 4,
    href: "",
    title: _ctx.translate('General_RowEvolutionRowActionTooltipTitle'),
    class: "rowEvolutionByFunnelStep",
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.openRowEvolution(_ctx.row.label), ["prevent"]))
  }, FunnelFlowRowvue_type_template_id_490b389c_hoisted_13, 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_11)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_3)])], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`step${_ctx.row.step_position}`)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FunnelFlowRowvue_type_template_id_490b389c_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.row.step_nb_entries === 1 ? _ctx.translate('Funnels_NbEntry', 1) : _ctx.translate('Funnels_NbEntries', _ctx.row.step_nb_entries)), 1), FunnelFlowRowvue_type_template_id_490b389c_hoisted_15, _ctx.row.step_nb_entries ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_WidgetLoader, {
    key: 0,
    class: "actionReportContainer",
    "widget-params": {
      module: 'Funnels',
      action: 'getFunnelEntries',
      viewDataTable: 'table',
      idSite: _ctx.idSite,
      widget: 1,
      disableLink: 1,
      showtitle: 0,
      idFunnel: _ctx.funnel.idfunnel,
      step: _ctx.row.step_position
    }
  }, null, 8, ["widget-params"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), FunnelFlowRowvue_type_template_id_490b389c_hoisted_16, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FunnelFlowRowvue_type_template_id_490b389c_hoisted_17, [_ctx.isLastRow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelFlowRowvue_type_template_id_490b389c_hoisted_18, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    title: _ctx.translate('Funnels_XVisitorsConvertedFunnel', _ctx.funnel.conversionRate),
    class: "progressOuter"
  }, [_ctx.funnel.conversionRate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    class: "progressInner",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: _ctx.funnel.conversionRate
    })
  }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_19), FunnelFlowRowvue_type_template_id_490b389c_hoisted_20, FunnelFlowRowvue_type_template_id_490b389c_hoisted_21, FunnelFlowRowvue_type_template_id_490b389c_hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "proceededRate",
    innerHTML: _ctx.$sanitize(_ctx.translate('Goals_ConversionRate', `${_ctx.funnel.conversionRate}<br />`))
  }, null, 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_23), FunnelFlowRowvue_type_template_id_490b389c_hoisted_24, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_XoutOfYVisitsconverted', _ctx.funnel.numConversions, _ctx.funnel.numEntries)), 1)])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelFlowRowvue_type_template_id_490b389c_hoisted_25, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    title: `${_ctx.row.step_proceeded_rate} proceeded to the next step`,
    class: "progressOuter"
  }, [_ctx.row.step_proceeded_rate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    class: "progressInner",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
      width: _ctx.row.step_proceeded_rate
    })
  }, null, 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, FunnelFlowRowvue_type_template_id_490b389c_hoisted_26), FunnelFlowRowvue_type_template_id_490b389c_hoisted_27, FunnelFlowRowvue_type_template_id_490b389c_hoisted_28, FunnelFlowRowvue_type_template_id_490b389c_hoisted_29, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_NbProceeded', _ctx.row.step_nb_proceeded)) + " ", 1), FunnelFlowRowvue_type_template_id_490b389c_hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelFlowRowvue_type_template_id_490b389c_hoisted_31, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.row.step_proceeded_rate), 1)])]))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FunnelFlowRowvue_type_template_id_490b389c_hoisted_32, [!_ctx.isLastRow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", FunnelFlowRowvue_type_template_id_490b389c_hoisted_33, "→")) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", FunnelFlowRowvue_type_template_id_490b389c_hoisted_34, [!_ctx.isLastRow ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelFlowRowvue_type_template_id_490b389c_hoisted_35, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.row.step_nb_exits === 1 || _ctx.row.step_nb_exits === '1' ? _ctx.translate('Funnels_NbExit', 1) : _ctx.translate('Funnels_NbExits', _ctx.row.step_nb_exits)), 1), FunnelFlowRowvue_type_template_id_490b389c_hoisted_36, _ctx.row.step_nb_exits ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_WidgetLoader, {
    key: 0,
    class: "actionReportContainer",
    "widget-params": {
      module: 'Funnels',
      action: 'getFunnelExits',
      viewDataTable: 'table',
      idSite: _ctx.idSite,
      widget: 1,
      showtitle: 0,
      disableLink: 1,
      idFunnel: _ctx.funnel.idfunnel,
      step: _ctx.row.step_position
    }
  }, null, 8, ["widget-params"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 2)], 64);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/FunnelFlowRow.vue?vue&type=template&id=490b389c

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/GoalFunnelReport/FunnelFlowRow.vue?vue&type=script&lang=ts


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {
  DataTable_RowActions_RowEvolution,
  SegmentedVisitorLog: FunnelFlowRowvue_type_script_lang_ts_SegmentedVisitorLog
} = window;
/* harmony default export */ var FunnelFlowRowvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    row: {
      type: Object,
      required: true
    },
    funnel: {
      type: Object,
      required: true
    },
    isLastRow: Boolean,
    isVisitorLogEnabled: Boolean,
    idSite: {
      type: [Number, String],
      required: true
    },
    segment: String
  },
  components: {
    WidgetLoader: external_CoreHome_["WidgetLoader"]
  },
  methods: {
    openSegmentedVisitorLog(step) {
      const segment = this.segment ? `;${this.segment}` : '';
      FunnelFlowRowvue_type_script_lang_ts_SegmentedVisitorLog.show('Funnel.getFunnelFlow', `funnels_name==${this.funnel.idfunnel};funnels_step_position==${step}${segment}`, {});
    },
    openRowEvolution(label) {
      new DataTable_RowActions_RowEvolution().showRowEvolution('Funnels.getFunnelFlow', label, {
        idGoal: this.funnel.idgoal,
        idFunnel: this.funnel.idfunnel
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/FunnelFlowRow.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/FunnelFlowRow.vue



FunnelFlowRowvue_type_script_lang_ts.render = FunnelFlowRowvue_type_template_id_490b389c_render

/* harmony default export */ var FunnelFlowRow = (FunnelFlowRowvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/GoalFunnelReport/GoalFunnelReport.vue?vue&type=script&lang=ts



/* harmony default export */ var GoalFunnelReportvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    funnel: {
      type: Object,
      required: true
    },
    funnelFlow: {
      type: Array,
      required: true
    },
    hasBeenPurged: Boolean,
    deleteReportsOlderThan: [Number, String],
    segment: String,
    idSite: {
      type: [Number, String],
      required: true
    },
    isVisitorLogEnabled: Boolean
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    EnrichedHeadline: external_CoreHome_["EnrichedHeadline"],
    FunnelFlowRow: FunnelFlowRow
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/GoalFunnelReport.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/GoalFunnelReport/GoalFunnelReport.vue



GoalFunnelReportvue_type_script_lang_ts.render = GoalFunnelReportvue_type_template_id_7871a1db_render

/* harmony default export */ var GoalFunnelReport = (GoalFunnelReportvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/ManageSiteFunnels/ManageSiteFunnels.vue?vue&type=template&id=57cee08e

const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_1 = {
  class: "manageSiteFunnels"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_2 = {
  key: 0,
  class: "addNewNoEdit"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_3 = {
  class: "listFunnels"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_4 = {
  class: "contentHelp"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_5 = {
  class: "first"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_6 = {
  key: 0
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_7 = {
  key: 0
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_8 = {
  colspan: "4"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_12 = ["id"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_13 = {
  class: "first"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_14 = ["title"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_15 = {
  key: 1
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_16 = {
  key: 0,
  style: {
    "padding-top": "2px"
  }
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_17 = ["onClick", "title"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_18 = ["onClick", "title"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_19 = {
  key: 0,
  class: "tableActionBar"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_21 = {
  key: 1
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_22 = ["innerHTML"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_23 = {
  class: "ui-confirm",
  ref: "confirm"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_24 = ["value"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_25 = ["value"];
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_26 = {
  class: "ui-confirm",
  ref: "funnelIsLockedCannotBeSaved"
};
const ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_27 = ["value"];
function ManageSiteFunnelsvue_type_template_id_57cee08e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$funnelToDelete;
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");
  const _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");
  const _component_ManageFunnel = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageFunnel");
  const _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");
  const _directive_content_table = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("content-table");
  const _directive_form = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("form");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_1, [_ctx.isAddNewView && !_ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.getEditFunnelHeader
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_AddNewUserUnableToEdit')), 1)]),
    _: 1
  }, 8, ["content-title"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.translate('Funnels_ManageFunnels')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
      loading: _ctx.isLoading
    }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Introduction')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelName')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Goals_GoalConversion')), 1), _ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Actions')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [!Object.keys(_ctx.funnels || {}).length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_8, [ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_ThereIsNoFunnelToManage', _ctx.siteName)) + " ", 1), ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_10, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_11])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.funnels || [], funnel => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
        id: funnel.idfunnel,
        key: funnel.idfunnel
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(funnel.idfunnel), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(funnel.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [funnel.idgoal && Number(funnel.idgoal) !== 0 || funnel.isSalesFunnel ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: "icon-ok system-success",
        title: _ctx.$sanitize(_ctx.translate('Funnels_GoalCheckHover', funnel.name))
      }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_14)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_15, "-"))]), _ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_16, [_ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
        key: 0,
        onClick: $event => _ctx.editFunnel(funnel.idfunnel),
        class: "table-action icon-edit",
        title: _ctx.translate('General_Edit')
      }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_17)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
        key: 1,
        onClick: $event => _ctx.deleteFunnel(funnel.idfunnel),
        class: "table-action icon-delete",
        title: _ctx.translate('General_Delete')
      }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_18)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_12);
    }), 128))])])), [[_directive_content_table]]), _ctx.userCanEditFunnels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
      id: "addFunnel",
      onClick: _cache[0] || (_cache[0] = $event => _ctx.createFunnel())
    }, [ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_AddNewFunnel')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]),
    _: 1
  }, 8, ["content-title"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showFunnelList && !_ctx.isAddNewView]]), _ctx.userCanEditFunnels ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, {
    "content-title": _ctx.getEditFunnelHeader
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
      uicontrol: "text",
      name: "funnelName",
      modelValue: _ctx.funnelName,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.funnelName = $event),
      maxlength: 50,
      title: _ctx.translate('Funnels_FunnelName'),
      "inline-help": _ctx.translate('Funnels_FunnelNameHelp')
    }, null, 8, ["modelValue", "title", "inline-help"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageFunnel, {
      "is-non-goal-funnel": true,
      "show-goal": 0,
      "is-hide-enable": true,
      goals: _ctx.goals
    }, null, 8, ["goals"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
      saving: _ctx.isLoading,
      onConfirm: _cache[2] || (_cache[2] = $event => _ctx.save()),
      value: _ctx.getSubmitText,
      class: "saveBtn"
    }, null, 8, ["saving", "value"]), !_ctx.isAddNewView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: 0,
      class: "entityCancel",
      onClick: _cache[3] || (_cache[3] = $event => _ctx.showListOfFunnels()),
      innerHTML: _ctx.$sanitize(_ctx.cancelText)
    }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_22)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])), [[_directive_form]])]),
    _: 1
  }, 8, ["content-title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_DeleteFunnelConfirm', `"${(_ctx$funnelToDelete = _ctx.funnelToDelete) === null || _ctx$funnelToDelete === void 0 ? void 0 : _ctx$funnelToDelete.name}"`)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_24), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_25)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelIsLockedCannotBeSaved')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Ok')
  }, null, 8, ManageSiteFunnelsvue_type_template_id_57cee08e_hoisted_27)], 512)], 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showEditFunnel || _ctx.isAddNewView]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageSiteFunnels/ManageSiteFunnels.vue?vue&type=template&id=57cee08e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/ManageSiteFunnels/ManageSiteFunnels.vue?vue&type=script&lang=ts




/* harmony default export */ var ManageSiteFunnelsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    userCanEditFunnels: Boolean,
    isAddNewView: {
      type: Boolean,
      default: false
    },
    siteId: {
      type: Number,
      required: true
    },
    siteName: {
      type: String,
      required: true
    },
    funnels: {
      type: Object,
      required: true
    },
    funnelId: {
      type: Number,
      required: false,
      default: 0
    },
    goals: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showEditFunnel: false,
      showFunnelList: true,
      isLoading: false,
      idFunnel: 0,
      funnelName: '',
      funnelToDelete: null
    };
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"],
    ContentBlock: external_CoreHome_["ContentBlock"],
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    ManageFunnel: ManageFunnel
  },
  directives: {
    ContentTable: external_CoreHome_["ContentTable"],
    Form: external_CorePluginsAdmin_["Form"]
  },
  methods: {
    scrollToTop() {
      setTimeout(() => {
        external_CoreHome_["Matomo"].helper.lazyScrollTo('.pageWrap', 200);
      });
    },
    editFunnel(idFunnel) {
      const funnelToEdit = this.funnels.find(funnel => Number(funnel.idfunnel) === Number(idFunnel));
      // If the funnel belongs to a goal, edit it using the goal edit form
      if (funnelToEdit.idgoal && funnelToEdit.idgoal !== '0') {
        external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
          category: 'Goals_Goals',
          subcategory: 'Goals_ManageGoals',
          idGoal: funnelToEdit.idgoal,
          scrollToFunnel: 1
        }));
      }
      // If the funnel is a sales funnel, redirect to the Ecommerce section to edit
      if (funnelToEdit.isSalesFunnel) {
        external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
          category: 'Goals_Ecommerce',
          subcategory: 'General_Overview',
          isFunnelEdit: true,
          scrollToFunnel: 1
        }));
      }
      external_CoreHome_["Matomo"].postEvent('Funnels.initFunnelForm', this.siteId, idFunnel);
      this.showFunnelList = false;
      this.showEditFunnel = true;
      this.idFunnel = idFunnel;
      this.funnelName = funnelToEdit.name;
    },
    deleteFunnel(idFunnel) {
      this.funnelToDelete = this.funnels.find(funnel => funnel.idfunnel === idFunnel);
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirm, {
        yes: () => {
          this.isLoading = true;
          external_CoreHome_["AjaxHelper"].fetch({
            idSite: this.siteId,
            idFunnel,
            method: 'Funnels.deleteNonGoalFunnel'
          }).then(() => {
            window.location.reload();
          }).finally(() => {
            this.isLoading = false;
          });
        }
      });
    },
    createFunnel() {
      // Clear the funnel form and display it
      this.idFunnel = 0;
      this.funnelName = '';
      // Use this hook to reset the funnel fields
      external_CoreHome_["Matomo"].postEvent('Funnels.resetForm', {});
      this.showFunnelList = false;
      this.showEditFunnel = true;
    },
    showListOfFunnels() {
      this.showFunnelList = true;
      this.showEditFunnel = false;
      this.scrollToTop();
    },
    save() {
      const parameters = {
        method: 'Funnels.saveNonGoalFunnel',
        idFunnel: this.idFunnel,
        funnelName: this.funnelName
      };
      const options = {};
      // Use this hook to get the formatted funnel fields
      external_CoreHome_["Matomo"].postEvent('Funnels.beforeUpdateFunnel', {
        parameters,
        options
      });
      if (parameters && parameters.isLocked && this.$refs.funnelIsLockedCannotBeSaved) {
        external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.funnelIsLockedCannotBeSaved, {});
        return;
      }
      if (parameters.cancelRequest) {
        return;
      }
      external_CoreHome_["AjaxHelper"].fetch(parameters, options).then(() => {
        const subcategory = external_CoreHome_["MatomoUrl"].parsed.value.subcategory;
        if (subcategory === 'Funnels_AddNewFunnel' && external_CoreHome_["Matomo"].helper.isReportingPage()) {
          // When adding a funnel for the first time we need to load manage funnels page afterward
          external_CoreHome_["ReportingMenuStore"].reloadMenuItems().then(() => {
            external_CoreHome_["MatomoUrl"].updateHash(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value), {}, {
              subcategory: 'Funnels_ManageFunnels'
            }));
            this.isLoading = false;
          });
        } else {
          window.location.reload();
        }
      }).catch(() => {
        this.scrollToTop();
        this.isLoading = false;
      });
    }
  },
  computed: {
    getEditFunnelHeader() {
      if (this.idFunnel === 0) {
        return Object(external_CoreHome_["translate"])('Funnels_AddNewFunnel');
      }
      return Object(external_CoreHome_["translate"])('Funnels_UpdateFunnel');
    },
    getSubmitText() {
      if (this.idFunnel === 0) {
        return Object(external_CoreHome_["translate"])('Funnels_AddFunnel');
      }
      return Object(external_CoreHome_["translate"])('Funnels_UpdateFunnel');
    },
    cancelText() {
      return Object(external_CoreHome_["translate"])('General_OrCancel', '<a class=\'entityCancelLink\'>', '</a>');
    }
  },
  mounted() {
    if (this.funnelId > 0) {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        this.editFunnel(this.funnelId);
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageSiteFunnels/ManageSiteFunnels.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/ManageSiteFunnels/ManageSiteFunnels.vue



ManageSiteFunnelsvue_type_script_lang_ts.render = ManageSiteFunnelsvue_type_template_id_57cee08e_render

/* harmony default export */ var ManageSiteFunnels = (ManageSiteFunnelsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/Report/FunnelConversionReport.vue?vue&type=template&id=0dc41e4e

const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_1 = {
  class: "funnelReport"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_2 = {
  class: "funnelReportHeader"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_3 = {
  key: 0,
  class: "legend"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_4 = ["title"];
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "colorBoxSplit"
}, null, -1);
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_6 = {
  class: "text"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_7 = {
  class: "title"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_8 = {
  key: 0,
  class: "subtitle"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_9 = {
  key: 1,
  class: "items"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_10 = {
  key: 0,
  class: "item"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "colorBoxProceeded"
}, null, -1);
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_12 = {
  class: "text"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_13 = {
  class: "title"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_14 = {
  key: 1,
  class: "item"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "colorBoxEntries"
}, null, -1);
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_16 = {
  class: "text"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_17 = {
  class: "title"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_18 = {
  key: 2,
  class: "item"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "colorBoxSkipped"
}, null, -1);
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_20 = {
  class: "text"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_21 = {
  class: "title"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_22 = {
  key: 3,
  class: "item"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "colorBoxExits"
}, null, -1);
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_24 = {
  class: "text"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_25 = {
  class: "title"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_26 = {
  key: 0,
  id: "funnelConversionTable"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_27 = {
  class: "stepTitle"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_28 = {
  class: "stepLabel"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_29 = {
  class: "cellLabel"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_30 = {
  class: "metricCount"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_31 = {
  class: "barsContainer"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_32 = {
  class: "barStep"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_33 = ["onMouseenter", "onMousemove", "onMouseleave"];
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_34 = ["onMouseenter", "onMousemove", "onMouseleave"];
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_35 = ["onMouseenter", "onMousemove", "onMouseleave"];
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_36 = ["onMouseenter", "onMousemove", "onMouseleave"];
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_37 = {
  class: "cellLabel"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_38 = {
  class: "metricCount"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_39 = {
  class: "metricRate"
};
const FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_40 = {
  key: 1
};
const _hoisted_41 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);
function FunnelConversionReportvue_type_template_id_0dc41e4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EnrichedHeadline = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("EnrichedHeadline");
  const _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");
  const _component_Tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Tooltip");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ContentBlock, null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_EnrichedHeadline, {
      "feature-name": "Funnels",
      "inline-help": _ctx.getFunnelReportHelpText
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelReport')), 1)]),
      _: 1
    }, 8, ["inline-help"])]), _ctx.getFunnelSteps.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_3, [_ctx.metadata.has_multiple_valid_segments ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: 0,
      class: "items",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.metadata.has_period_comparison ? `grid-template-columns: repeat(${_ctx.columnsPerRow}, auto);` : 'grid-template-columns: repeat(3, auto);')
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.metadata.segments, (value, segmentKey) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        class: "item",
        key: segmentKey,
        title: _ctx.parseLegendText(segmentKey).hover
      }, [FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.parseLegendText(segmentKey).title), 1), _ctx.metadata.has_period_comparison ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.parseLegendText(segmentKey).subtitle), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 8, FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_4);
    }), 128))], 4)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_9, [_ctx.metadata.has_proceeded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_10, [FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Progressions')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.metadata.has_entries ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_14, [FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Entries')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.metadata.has_skipped ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_18, [FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_20, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Skips')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.metadata.has_exits ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_22, [FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_24, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_25, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_DropOff')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), _ctx.getFunnelSteps.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.metadata.steps, (step, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", {
        key: step
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Step')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(index + 1), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_28, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(step), 1)]);
    }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.getFunnelSteps, (segments, stepIndex) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: stepIndex
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_29, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_ColumnNbVisits')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatAbbr(_ctx.getFirstSegmentStep(stepIndex).step_nb_visits)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_31, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(segments, (segment, segmentKey) => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
          key: segmentKey,
          class: "barStepContainer"
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          class: "barProceeded",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
            height: _ctx.getBarHeight('proceeded', stepIndex, segment)
          }),
          onMouseenter: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'proceeded', 'show'),
          onMousemove: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'proceeded', 'move'),
          onMouseleave: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'proceeded', 'hide')
        }, null, 44, FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_33), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          class: "barEntries",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.getBarHeight('entries', stepIndex, segment) === '0%' ? {
            display: 'none'
          } : {
            height: _ctx.getBarHeight('entries', stepIndex, segment)
          }),
          onMouseenter: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'entries', 'show'),
          onMousemove: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'entries', 'move'),
          onMouseleave: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'entries', 'hide')
        }, null, 44, FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          class: "barSkipped",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.getBarHeight('skipped', stepIndex, segment) === '0%' ? {
            display: 'none'
          } : {
            height: _ctx.getBarHeight('skipped', stepIndex, segment)
          }),
          onMouseenter: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'skipped', 'show'),
          onMousemove: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'skipped', 'move'),
          onMouseleave: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'skipped', 'hide')
        }, null, 44, FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_35), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
          class: "barExits",
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.getBarHeight('exits', stepIndex, segment) === '0%' ? {
            display: 'none'
          } : {
            height: _ctx.getBarHeight('exits', stepIndex, segment)
          }),
          onMouseenter: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'exits', 'show'),
          onMousemove: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'exits', 'move'),
          onMouseleave: $event => _ctx.handleTooltip($event, segmentKey, stepIndex, segment, 'exits', 'hide')
        }, null, 44, FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_36)])]);
      }), 128))])]);
    }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.getFunnelSteps, (segments, stepIndex) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("td", {
        key: stepIndex
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_37, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getBottomLabel(_ctx.getFunnelSteps.length === stepIndex + 1)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.getMetricValueClasses(_ctx.getFunnelSteps.length === stepIndex + 1))
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_38, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatAbbr(_ctx.getBottomMetric(stepIndex, _ctx.getFirstSegmentStep(stepIndex)))), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_39, " (" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getBottomRate(stepIndex, _ctx.getFirstSegmentStep(stepIndex))) + ") ", 1)], 2)]);
    }), 128))])])])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", FunnelConversionReportvue_type_template_id_0dc41e4e_hoisted_40, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreHome_ThereIsNoDataForThisReport')), 1), _hoisted_41, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_FunnelReportNotGeneratedYet')), 1)]))]),
    _: 1
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Tooltip, {
    ref: "tooltip",
    title: _ctx.tooltipTitle,
    subtitle: _ctx.tooltipSubtitle,
    exits: _ctx.tooltipExits,
    skipped: _ctx.tooltipSkipped,
    entries: _ctx.tooltipEntries,
    proceeded: _ctx.tooltipProceeded,
    type: _ctx.tooltipType
  }, null, 8, ["title", "subtitle", "exits", "skipped", "entries", "proceeded", "type"])]);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Report/FunnelConversionReport.vue?vue&type=template&id=0dc41e4e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/Tooltip/Tooltip.vue?vue&type=template&id=cd2cd912

const Tooltipvue_type_template_id_cd2cd912_hoisted_1 = {
  class: "tooltip-item title"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_2 = {
  class: "tooltip-item subtitle"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_3 = {
  class: "tooltip-label"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_4 = {
  class: "tooltip-value"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_5 = {
  class: "tooltip-label"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_6 = {
  class: "tooltip-value"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_7 = {
  class: "tooltip-label"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_8 = {
  class: "tooltip-value"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_9 = {
  class: "tooltip-label"
};
const Tooltipvue_type_template_id_cd2cd912_hoisted_10 = {
  class: "tooltip-value"
};
function Tooltipvue_type_template_id_cd2cd912_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    ref: "tooltipRef",
    class: "tooltip tooltip-funnel",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.tooltipStyle)
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Tooltipvue_type_template_id_cd2cd912_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Tooltipvue_type_template_id_cd2cd912_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.subtitle), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tooltip-item", {
      selected: _ctx.type === 'exits'
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_DropOff')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatNumber(_ctx.exits)), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tooltip-item", {
      selected: _ctx.type === 'skipped'
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Skips')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatNumber(_ctx.skipped)), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tooltip-item", {
      selected: _ctx.type === 'entries'
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Entries')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatNumber(_ctx.entries)), 1)], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["tooltip-item", {
      selected: _ctx.type === 'proceeded'
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Funnels_Progressions')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", Tooltipvue_type_template_id_cd2cd912_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formatNumber(_ctx.proceeded)), 1)], 2)], 4)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.visible]]);
}
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Tooltip/Tooltip.vue?vue&type=template&id=cd2cd912

// EXTERNAL MODULE: ./plugins/Funnels/javascripts/numberFormatter.js
var numberFormatter = __webpack_require__("6ec9");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/Tooltip/Tooltip.vue?vue&type=script&lang=ts



/* harmony default export */ var Tooltipvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    exits: {
      type: Number,
      required: true
    },
    skipped: {
      type: Number,
      required: true
    },
    entries: {
      type: Number,
      required: true
    },
    proceeded: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      visible: false,
      position: {
        top: 0,
        left: 0
      }
    });
    const tooltipRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    const tooltipStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => ({
      top: `${state.position.top}px`,
      left: `${state.position.left}px`,
      position: 'absolute',
      zIndex: 1000
    }));
    function show(event) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      state.position.top = event.clientY + scrollTop + 10;
      state.position.left = event.clientX + scrollLeft + 10;
      state.visible = true;
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        const tooltipElement = tooltipRef.value;
        if (tooltipElement) {
          const {
            innerWidth,
            innerHeight
          } = window;
          const tooltipRect = tooltipElement.getBoundingClientRect();
          if (tooltipRect.right > innerWidth) {
            state.position.left = event.clientX + scrollLeft - tooltipRect.width - 10;
          }
          if (tooltipRect.bottom > innerHeight) {
            state.position.top = event.clientY + scrollTop - tooltipRect.height - 10;
          }
          const adjustedTooltipRect = tooltipElement.getBoundingClientRect();
          if (adjustedTooltipRect.left < 0) {
            state.position.left = scrollLeft + 10;
          }
          if (adjustedTooltipRect.top < 0) {
            state.position.top = scrollTop + 10;
          }
        }
      });
    }
    function hide() {
      state.visible = false;
    }
    return Object.assign(Object.assign({}, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(state)), {}, {
      tooltipRef,
      show,
      hide,
      tooltipStyle,
      translate: external_CoreHome_["translate"],
      formatNumber: numberFormatter["formatNumber"]
    });
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Tooltip/Tooltip.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Tooltip/Tooltip.vue



Tooltipvue_type_script_lang_ts.render = Tooltipvue_type_template_id_cd2cd912_render

/* harmony default export */ var Tooltip = (Tooltipvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--15-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./plugins/Funnels/vue/src/Report/FunnelConversionReport.vue?vue&type=script&lang=ts




/* harmony default export */ var FunnelConversionReportvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    metadata: {
      type: Object,
      required: true
    },
    firstSegmentFlow: {
      type: Array,
      required: true
    },
    funnelFlow: {
      type: Array,
      required: true
    },
    isClosedFunnel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EnrichedHeadline: external_CoreHome_["EnrichedHeadline"],
    ContentBlock: external_CoreHome_["ContentBlock"],
    Tooltip: Tooltip
  },
  setup() {
    const tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    return {
      tooltip,
      formatAbbr: numberFormatter["formatAbbr"]
    };
  },
  mounted() {
    if (false) {}
  },
  data() {
    return {
      tooltipTitle: '',
      tooltipSubtitle: '',
      tooltipExits: 0,
      tooltipSkipped: 0,
      tooltipEntries: 0,
      tooltipProceeded: 0,
      tooltipType: ''
    };
  },
  methods: {
    getFirstSegmentStep(stepIndex) {
      return this.firstSegmentFlow[stepIndex] || {};
    },
    translateNumericPlaceholder(key, val) {
      return Object(external_CoreHome_["translate"])(key, val || 0);
    },
    getBarHeight(type, index, step) {
      if (step === null) {
        return '0%';
      }
      const heights = {
        empty: step.bar_height_empty,
        exits: step.bar_height_exits,
        skipped: step.bar_height_skipped,
        // For the first step of a funnel, all visits are technically new entries, but for
        // visual consistency, we display them as "proceeded" instead of "entries" in the bar.
        entries: index === 0 ? 0 : step.bar_height_entries,
        proceeded: index === 0 ? step.bar_height_entries : step.bar_height_proceeded
      };
      return `${heights[type] || 0}%`;
    },
    setTooltipData(segmentKey, index, step, type) {
      const {
        title,
        period
      } = this.parseSegmentKey(segmentKey);
      this.tooltipTitle = title;
      this.tooltipSubtitle = period;
      this.tooltipExits = step.step_nb_previous_exits || 0;
      this.tooltipSkipped = step.step_nb_skipped || 0;
      this.tooltipEntries = step.step_nb_entries || 0;
      this.tooltipProceeded = step.step_nb_previous_proceeded || 0;
      this.tooltipType = index === 0 && type === 'proceeded' ? 'entries' : type;
    },
    parseLegendText(segmentKey) {
      const {
        title,
        period
      } = this.parseSegmentKey(segmentKey);
      return {
        title,
        subtitle: period,
        hover: `${title} (${period})`
      };
    },
    parseSegmentKey(segmentKey) {
      const stringKey = String(segmentKey);
      const parts = stringKey.split('~|~');
      const title = parts[0];
      const period = parts[1];
      return {
        title,
        period
      };
    },
    getBottomLabel(isLastStep) {
      if (isLastStep) {
        return Object(external_CoreHome_["translate"])('Funnels_FunnelConversion');
      }
      return Object(external_CoreHome_["translate"])('Funnels_Exits');
    },
    getBottomMetric(index, step) {
      if (this.getFunnelSteps.length === index + 1) {
        return step.step_nb_visits;
      }
      return step.step_nb_exits;
    },
    getBottomRate(index, step) {
      if (this.getFunnelSteps.length === index + 1) {
        return step.conversion_rate;
      }
      return step.step_rate_exits;
    },
    getMetricValueClasses(isLastStep) {
      let classes = 'metricValues';
      if (isLastStep) {
        classes += ' conversionMetrics';
      }
      return classes;
    },
    handleTooltip(event, segmentKey, index, step, type, action) {
      if (this.tooltip) {
        if (action === 'show') {
          this.setTooltipData(segmentKey, index, step, type);
          this.tooltip.show(event);
        } else if (action === 'move') {
          this.tooltip.show(event);
        } else {
          this.tooltip.hide();
        }
      }
    }
  },
  computed: {
    getFunnelSteps() {
      return this.funnelFlow;
    },
    getFunnelReportHelpText() {
      const helpText = Object(external_CoreHome_["translate"])('Funnels_FunnelReportHelp');
      let flowText = Object(external_CoreHome_["translate"])('Funnels_FunnelReportHelpOpenFunnel');
      let fullHelpText = `${helpText} ${flowText}`;
      if (this.isClosedFunnel) {
        flowText = Object(external_CoreHome_["translate"])('Funnels_FunnelReportHelpClosedFunnel');
        fullHelpText = `${helpText} ${flowText}`;
      }
      return fullHelpText;
    },
    columnsPerRow() {
      const totalItems = Object.keys(this.metadata.segments).length;
      return Math.ceil(totalItems / 2);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Report/FunnelConversionReport.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/Report/FunnelConversionReport.vue



FunnelConversionReportvue_type_script_lang_ts.render = FunnelConversionReportvue_type_template_id_0dc41e4e_render

/* harmony default export */ var FunnelConversionReport = (FunnelConversionReportvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/Funnels/vue/src/index.ts
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret
 * or copyright law. Redistribution of this information or reproduction of this material is
 * strictly forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */







// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=Funnels.umd.js.map
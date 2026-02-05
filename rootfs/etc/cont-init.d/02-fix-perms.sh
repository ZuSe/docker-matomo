#!/usr/bin/with-contenv sh
# shellcheck shell=sh

echo "Fixing perms..."
mkdir -p /data/config \
  /data/geoip \
  /data/misc \
  /data/plugins \
  /data/session \
  /data/tmp \
  /var/lib/nginx \
  /var/log/nginx \
  /var/log/php85 \
  /var/run/nginx \
  /var/run/php-fpm

# Recursively fix ownership on /data to handle files from previous pod runs
echo "Fixing /data ownership recursively..."
chown -R matomo:matomo /data

chown matomo:matomo \
  /var/www/matomo/plugins \
  /var/www/matomo/matomo.js \
  /var/www/matomo/piwik.js \
  /var/www/matomo/vendor/tecnickcom/tcpdf/fonts
chown -R matomo:matomo \
  /tpls \
  /var/lib/nginx \
  /var/log/nginx \
  /var/log/php85 \
  /var/run/nginx \
  /var/run/php-fpm \
  /var/www/matomo/config \
  /var/www/matomo/js

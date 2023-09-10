#!/usr/bin/env bash
export DOLLAR='$'
envsubst < /env/nginx/default.conf.template > /etc/nginx/default.conf
nginx -g "daemon off;"
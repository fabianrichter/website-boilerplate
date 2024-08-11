'use strict';

/**
 * config-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::config-header.config-header');

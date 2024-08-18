'use strict';

module.exports = async ({ strapi }) => {
  strapi.customFields.register({
    name: 'priority',
    plugin: 'plugin-name',
    type: 'decimal',
  });
};
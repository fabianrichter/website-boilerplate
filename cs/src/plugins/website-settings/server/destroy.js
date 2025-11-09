'use strict';

module.exports = ({ strapi }) => {
  // destroy phase
  return async () => {
    const existingSettings = await strapi.entityService.findMany(
      "plugin::website-settings.website-setting"
    );

    if (existingSettings && existingSettings.length > 0) {
      await strapi.entityService.delete("plugin::website-settings.website-setting", {
        id: existingSettings[0].id,
      });
    }
  };
};

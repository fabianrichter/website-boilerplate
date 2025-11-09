'use strict';

module.exports = async ({ strapi }) => {
  // bootstrap phase
  const existingSettings = await strapi.entityService.findMany(
    "plugin::website-settings.website-setting"
  );

  if (!existingSettings || existingSettings.length === 0) {
    await strapi.entityService.create("plugin::website-settings.website-setting", {
      data: {
        maintenanceMode: false,
        maintenanceModeText: "We are currently under maintenance. Please check back later.",
      },
    });
  }
};

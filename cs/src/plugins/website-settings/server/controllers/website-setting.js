"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    let data = await strapi.entityService.findMany(
      "plugin::website-settings.website-setting"
    );
    ctx.body = data || {};
  },
  async update(ctx) {
    //ctx.body = "You are in the my-plugin-content-type controller";
  },
});

"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    const id = ctx.params?.id;

    if (!id) {
      return ctx.badRequest("id is required");
    }

    const entity = await strapi.entityService.findOne("api::page.page", id);
    ctx.body = entity;
  },
});

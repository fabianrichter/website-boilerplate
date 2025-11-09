"use strict";

module.exports = async ({ strapi }) => {
  const pages = await strapi.entityService.findMany("api::page.page");

  pages.forEach(async (page) => {
    if (!!page.sitemap) return;

    await strapi.entityService.update("api::page.page", page.id, {
      data: {
        sitemap: {
          changeFreq: "weekly",
          priority: 0.5,
        },
      },
    });
  });
};

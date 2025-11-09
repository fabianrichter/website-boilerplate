"use strict";

const sitemapContent = require("./components/sitemap.json");

/* module.exports = ({ strapi }) => {
  if (!strapi.components["shared.sitemap"]) {
    strapi.components["shared.sitemap"] = sitemapContent;
  }

  const contentTypePage = strapi.contentType("api::page.page");

  if (!contentTypePage) {
    throw new Error("Content-Type 'api::page.page' not found");
  }

  if (!contentTypePage.attributes) {
    throw new Error("Attributes for 'api::page.page' not found");
  }

  if (!contentTypePage.attributes.sitemap) {
    contentTypePage.attributes = {
      sitemap: {
        type: "component",
        repeatable: false,
        component: "shared.sitemap",
        configurable: false,
      },
    };
  }
}; */

module.exports = async ({ strapi }) => {
  const components = strapi.components;
  if (!components["shared.sitemap"]) {
    strapi.reload.isWatching = false;

    await strapi
      .plugin("content-type-builder")
      .services.components.createComponent({
        component: {
          category: "shared",
          displayName: "Sitemap",
          attributes: sitemapContent.attributes,
        },
      });

    strapi.reload();
  }

  const contentTypePage = strapi.contentType("api::page.page");

  if (!contentTypePage.attributes.sitemap) {
    contentTypePage.attributes = {
      ...contentTypePage.attributes,
      sitemap: {
        type: "component",
        repeatable: false,
        component: "shared.sitemap",
        configurable: false,
      },
    };
  }
};

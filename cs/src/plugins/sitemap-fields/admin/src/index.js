import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import { SitemapFields } from "./components/SitemapFields";
import { Component } from "@strapi/icons";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addFields({
      type: "sitemapFields",
      Component: SitemapFields,
    })
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
    // execute some bootstrap code
    app.injectContentManagerComponent("editView", "right-links", {
      name: "Sitemap",
      Component: SitemapFields,
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};

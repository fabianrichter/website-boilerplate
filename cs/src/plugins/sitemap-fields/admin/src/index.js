import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import { SitemapFields } from "./components/SitemapFields";
import { Component } from "@strapi/icons";

const name = pluginPkg.strapi.name;

export default {
  register(app) {},
  bootstrap(app) {},
};

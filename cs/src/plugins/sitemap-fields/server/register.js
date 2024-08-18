"use strict";

module.exports = ({ strapi }) => {
  const extensionService = strapi.plugin("graphql").service("extension");

  extensionService.use(({ nexus }) => ({
    types: [
      nexus.extendType({
        type: 'Article',
        definition(t) {
          t.field('priority', { type: 'Float' });
        },
      }),
      nexus.extendType({
        type: 'Page',
        definition(t) {
          t.field('priority', { type: 'Float' });
        },
      }),
    ],
  }));
};

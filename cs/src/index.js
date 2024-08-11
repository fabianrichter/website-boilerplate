"use strict";

const { getGraphQLRateLimiter } = require("graphql-rate-limit");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const rateLimiter = getGraphQLRateLimiter({
      identifyContext: (ctx) => ctx.id,
    });

    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use({
      resolversConfig: {
        "Mutation.createContactSubmission": {
          middlewares: [
            async (next, parent, args, context, info) => {
              const errorMessage = await rateLimiter(
                { parent, args, context, info },
                { max: 3, window: "1d" }
              );
              if (errorMessage) throw new Error(errorMessage);
              return await next(parent, args, context, info);
            },
          ],
        },
      },
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};

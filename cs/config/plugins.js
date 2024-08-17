module.exports = ({ env }) => {
  const VS_HOST = env("VS_HOST", "http://localhost:3000");
  return {
    // Navigation
    navigation: {
      enabled: true,
      config: {
        gql: {
          navigationItemRelated: ["Page", "Article", "Event"],
        },
      },
    },
    // EZ Forms
    ezforms: {
      config: {
        captchaProvider: {
          name: "none",
        },
        notificationProviders: [],
      },
    },
    // Slugify
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          page: {
            field: "slug",
            references: "title",
          },
          article: {
            field: "slug",
            references: "title",
          },
        },
      },
    },
    // GraphQL
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 15,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    // Nodemailer
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "smtp.migadu.com"),
          port: env.int("SMTP_PORT", 465),
          auth: {
            user: env("EMAIL_USER", undefined),
            pass: env("EMAIL_PASS", undefined),
          },
        },
        settings: {
          defaultFrom: env("EMAIL_FROM", undefined),
          defaultReplyTo: env("EMAIL_REPLY_TO", undefined),
        },
      },
    },
    // Placeholder
    placeholder: {
      enabled: true,
      config: {
        size: 10,
      },
    },
    "content-versioning": {
      enabled: true,
    },
    "preview-button": {
      config: {
        contentTypes: [
          {
            uid: "api::page.page",
            draft: {
              url: VS_HOST + "/{slug}",
              query: {
                publicationState: "PREVIEW",
              },
            },
            published: {
              url: VS_HOST + "/{slug}",
            },
          },
        ],
      },
    },
  };
};

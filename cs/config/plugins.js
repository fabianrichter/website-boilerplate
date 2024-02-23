module.exports = ({ env }) => ({
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
  // Slugify
/*   slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  }, */
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
});

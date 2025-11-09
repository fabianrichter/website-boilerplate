module.exports = {
  "pass-data": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/:id",
        handler: "sitemapFieldsController.index",
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
};

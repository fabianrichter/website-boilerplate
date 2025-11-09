module.exports = {
  'pass-data': {
    type: 'admin',
    routes: [
      {
        method: 'GET',
        path: '/pass-data',
        handler: 'websiteSetting.index',
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: "PUT",
        path: "/pass-data",
        handler: "websiteSetting.update",
        config: {
          policies: [],
          auth: false,
        },
      }
    ]
  },
};

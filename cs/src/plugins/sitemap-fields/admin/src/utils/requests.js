const { default: axios } = require("axios");

const requests = {
  get: async (id) => {
    const data = await axios.get(`/sitemap-fields/${id}`);
    return data;
  },
};

export default requests;
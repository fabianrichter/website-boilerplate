import axios from "axios";

const requests = {
  getWebsiteSettings: async () => {
    const data = await axios.get("/website-settings/pass-data");
    return data;
  },
};

export default requests;
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "48a5ff86c03b454d80eb861af324f543",
  },
});

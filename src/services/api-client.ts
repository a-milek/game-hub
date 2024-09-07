import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9203ef8cb4204af591ef128c9bc66cf3",
  },
});

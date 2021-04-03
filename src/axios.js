import axios from "axios";

/* axios.defaults.baseURL = "https://imaku.uz/api"; */

axios.defaults.baseURL = "https://api.7market.uz";

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

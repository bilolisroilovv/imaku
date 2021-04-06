import axios from "axios";

axios.defaults.baseURL = "https://imaku.uz/api";
/* axios.defaults.baseURL = "/api/"; */

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

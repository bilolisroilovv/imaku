import axios from "axios";

/* axios.defaults.baseURL = "https://imaku.uz/api"; */

axios.defaults.baseURL = "http://172.16.20.20/api/";

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

import axios from "axios";

/* axios.defaults.baseURL = "https://imaku.uz/api"; */

axios.defaults.baseURL = "http://5.182.26.134:8080/api";

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

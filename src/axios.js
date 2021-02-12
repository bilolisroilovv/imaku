import axios from "axios";

axios.defaults.baseURL = "http://192.168.5.56:8000/";
/* axios.defaults.baseURL = "http://185.241.53.192:8000/"; */

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "http://192.168.5.56:8000/";
/* axios.defaults.baseURL = "https://imaku.uz:8000/"; */
=======
// axios.defaults.baseURL = "http://192.168.5.56:8000/";
axios.defaults.baseURL = "https://imaku.uz:8000/";
>>>>>>> d15b93892aef5456c3052deef7528af199cfc252

axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

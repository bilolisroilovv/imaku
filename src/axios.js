import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "https://imaku.uz/api";
/* axios.defaults.baseURL = "/api/"; */
=======
/* axios.defaults.baseURL = "https://imaku.uz/api"; */
axios.defaults.baseURL = "https://api.7market.uz";

>>>>>>> 99d5099731b57878882140540a3dea5046346eae
axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
};

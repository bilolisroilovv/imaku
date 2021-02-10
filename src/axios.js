import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "http://185.241.53.192:8000/";
=======
axios.defaults.baseURL = "http://185.241.53.192:8000";
/* axios.defaults.baseURL = "http://192.168.5.56:8000/"; */
>>>>>>> 12de01f7aab61306eba41d2390c1925e42ab2350
/* axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') */
axios.defaults.headers.common = {
  Authorization: localStorage.getItem("token")
}; 

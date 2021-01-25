import axios from 'axios'

axios.defaults.baseURL = 'http://185.230.204.17/'
/* axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') */
axios.defaults.headers.common = {
  Authorization: localStorage.getItem('token')
}

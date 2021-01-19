import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://192.168.5.71:8000/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '');
  }

  getUserBoard() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }
}

export default new UserService();
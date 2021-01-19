import axios from 'axios'

const API_URL = 'http://192.168.5.71:8000/'

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'authorize', {
        phone: user.phone,
        code: user.code
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    })
  }
}

export default new AuthService();
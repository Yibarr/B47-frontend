import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://instal-clone.herokuapp.com/api/v1/'
  baseURL: 'http://localhost:3006/api/v1/'
})

export const auth = {
  signup: (body) => api.post('/signup', body),
  login: (body) => api.post('/login', body),
}



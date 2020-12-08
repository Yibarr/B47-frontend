import axios from 'axios';

export const auth = {
  login: (body) => axios.post('https://instal-clone.herokuapp.com/api/v1/login', body)
}



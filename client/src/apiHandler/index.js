import axios from 'axios';

const composeToken = (token) => token ? { Authorization: `Bearer ${token}` } : {};

const apiHandler = (url, method, body = {}, token = '') => axios({
  method,
  url: `http://localhost:5000/server${url}`,
  data: body,
  headers: {
    ...composeToken(token)
  }
});

export default apiHandler;
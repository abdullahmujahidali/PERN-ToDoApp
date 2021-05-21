/**
 *  axios is a package of NPM which allows us http request from browser to our node js server 
 * 
 * This file is responsible to connect our api from frontend to backend. 
 * 
 * Backend server is running on port 5000
 * Frontend server is running on port 3000
 */

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
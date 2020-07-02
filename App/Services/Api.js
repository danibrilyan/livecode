import axios from 'axios';
import StaticVar from '../Config/StaticVar';


// ===> api create 
const api = axios.create({
  baseURL: StaticVar.Base_Url,
  // timeout: 10000,
  headers:{}
});

// ===> api interceptors 
// api.interceptors.request.use(function (config) {
//     // set headers after authentication
//     config.headers['x-access-token'] = localStorage.getItem("token");
//     return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


// ===> api list function request


const getParticipants = () => api.get('/participants');

export const apis = {
    getParticipants,
}

export default apis
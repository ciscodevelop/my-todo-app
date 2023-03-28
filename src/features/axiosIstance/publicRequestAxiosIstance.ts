import axios from "axios";

const urlProduction=process.env.REACT_APP_URL_PRO
const urlDevelopment=process.env.REACT_APP_URL_DEV
export const requestCallAxios = axios.create({
  baseURL: urlDevelopment,
  timeout: 5000,
  headers: {
    //Authorization: "Bearer " + store.getState().user.accessToken,
  },
});
export default requestCallAxios;

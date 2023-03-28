import axios from "axios";
import { store } from "../../app/store";
const urlProduction=process.env.REACT_APP_URL_PRO
const urlDevelopment=process.env.REACT_APP_URL_DEV
export const userCallAxios = axios.create({
  baseURL: urlDevelopment,
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + store.getState().user.accessToken,
  },
});
export default userCallAxios;

import axios from "axios";
import { store } from "../../app/store";

export const userCallAxios = axios.create({
  baseURL: "https://server-todo-app.onrender.com/api/",
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + store.getState().user.accessToken,
  },
});
export default userCallAxios;

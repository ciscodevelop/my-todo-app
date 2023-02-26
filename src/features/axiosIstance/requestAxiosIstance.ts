import axios from "axios";

export const requestCallAxios = axios.create({
  baseURL: "https://server-todo-app.onrender.com/api/",
  timeout: 5000,
  headers: {
    //Authorization: "Bearer " + store.getState().user.accessToken,
  },
});
export default requestCallAxios;

import axios from "axios";

const myAxios = axios.create({
  baseURL:  process.env.URL_SERVICE_REVENUE, // Ajuste conforme o ambiente
  withCredentials: true,
});

export default myAxios;
  
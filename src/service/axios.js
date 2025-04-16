import { getItem } from "@/helpers/persistaneStorage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";


axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const autharization = token ? "Token " + token : "";
  console.log(autharization);
  config.headers.Authorization = autharization;
  return config;
});

export default axios;

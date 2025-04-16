import axios from "./axios.js";

const AuthService = {
  register(user) {
    return axios.post("/users", { user });
  },
  login(user) {
    return axios.post("/users/login", { user });
  },
  currentUser(){
    return axios.get('/user')
  }
};

export default AuthService;

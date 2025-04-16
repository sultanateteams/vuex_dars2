import router from "@/router";
import AuthService from "@/service/auth";
import { setItem } from "../helpers/persistaneStorage";
import { gettersTypes } from "../modules/types.js";
const state = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  nameInput: "",
  surnameInput: "",
  emailInput: "",
  passwordInput: "",
  confirmPasswordInput: "",
};

const getters = {
  [gettersTypes.currentuser]: (state) => {
    return state.user;
  },
  [gettersTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn);
  },
  [gettersTypes.isAnonimus]: (state) => {
    return state.isLoggedIn === false;
  },
};

const mutations = {
  clearData(state) {
    state.isLoading = false;
    state.error = null;
    state.nameInput = "";
    state.surnameInput = "";
    state.emailInput = "";
    state.passwordInput = "";
    state.confirmPasswordInput = "";
  },
  userRegister(state) {
    state.isLoading = true;
    state.error = null;
    state.user = null;
  },
  registerStart(state) {
    state.isLoading = true;
  },
  registerSuccess(state, payload) {
    state.user = payload;
    state.isLoading = false;
    state.isLoggedIn = true;
    setItem("token", payload.token);
    router.push("home");
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.error = payload;
  },

  userLogin(state) {
    state.isLoading = true;
    state.error = null;
    state.user = null;
  },
  loginStart(state, payload) {
    state.isLoading = true;
  },
  loginSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedIn = true;
    setItem("token", payload.token);
    router.push("home");
  },
  loginFailure(state, payload) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.error = { email: payload.emailOrPassword };
  },

  currentUserStart(state) {
    state.isLoading = true;
  },

  currentUserSuccess(state, payload) {
    state.isLoading = false;
    state.isLoggedIn = true;
    state.user = payload;
  },

  currentUserFailure(state) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.user = null;
  },
};

const actions = {
  userRegister(context) {
    return new Promise(() => {
      context.commit("registerStart");
      AuthService.register({
        username: state.nameInput,
        surname: state.surnameInput,
        email: state.emailInput,
        password: state.passwordInput,
      })
        .then((res) => {
          context.commit("registerSuccess", res.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data.errors);
        });
    });
  },

  userLogin(context) {
    return new Promise(() => {
      context.commit("loginStart");
      AuthService.login({
        email: state.emailInput,
        password: state.passwordInput,
      })
        .then((res) => {
          context.commit("loginSuccess", res.data.user);
        })
        .catch((error) => {
          context.commit("loginFailure", error.response.data.errors);
        });
    });
  },

  getCurrentUser(context) {
    return new Promise((resolve, reject) => {
      context.commit("currentUserStart");
      AuthService.currentUser()
        .then((res) => {
          context.commit("currentUserSuccess", res.data.user);
        })
        .catch((error) => {
          context.commit("currentUserFailure", error);
        });
    });
  },
};

export default { state, mutations, actions, getters };

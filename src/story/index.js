import { createStore } from "vuex";
import projects from "@/modules/projects";
import register from "@/modules/register";
const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: { projects, register },
});

export default store;

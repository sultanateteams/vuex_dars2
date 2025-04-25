import { createStore } from "vuex";
import projects from "@/modules/projects";
import register from "@/modules/register";
import articles from "@/modules/articles";
import articleCrud from "@/modules/article-crud";
const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: { projects, register, articles, articleCrud },
});

export default store;

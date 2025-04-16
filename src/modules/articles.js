import ArticleService from "@/service/article";

const state = {
  isLoading: false,
  error: null,
  articles: null,
  articlesCount: 0,
};

const getters = {};

const mutations = {
  getArticles(state) {
    state.isLoading = false;
    state.error = null;
  },
  articleStart(state) {
    state.isLoading = true;
  },
  articleSuccess(state, payload) {
    state.isLoading = false;
    state.articles = payload.articles;
    state.articlesCount = payload.articlesCount;
  },
  articleFailure(state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  getArticles(context) {
    return new Promise((resolve, reject) => {
      context.commit("articleStart");
      ArticleService.getArticles()
        .then((res) => {
          context.commit("articleSuccess", res.data);
        })
        .catch((error) => {
          context.commit("articleFailure", error.message);
        });
    });
  },
};

export default { actions, state, mutations, getters };

import ArticleService from "@/service/article";

const state = {
  isLoading: false,
  error: null,
  articles: null,
  articlesCount: 0,
  article: null,
};

const getters = {};

const mutations = {
  getArticles(state) {
    state.isLoading = false;
    state.error = null;
  },
  articleStart(state) {
    state.isLoading = true;
    state.articles = null;
    state.articlesCount = 0;
    state.article = null;
  },
  articlesSuccess(state, payload) {
    state.isLoading = false;
    state.articles = payload.articles;
    state.articlesCount = payload.articlesCount;
  },
  articlesFailure(state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
  articleSuccess(state, payload) {
    state.isLoading = false;
    state.article = payload;
  },
};

const actions = {
  getArticles(context) {
    return new Promise((resolve, reject) => {
      context.commit("articleStart");
      ArticleService.getArticles()
        .then((res) => {
          context.commit("articlesSuccess", res.data);
        })
        .catch((error) => {
          context.commit("articlesFailure", error.message);
        });
    });
  },
  getArticle(context, payload) {
    context.commit("articleStart");
    return new Promise((resolve, reject) => {
      ArticleService.getArticleDetail(payload)
        .then((res) => {
          context.commit("articleSuccess", res.data.article);
          resolve(res.data.article);
        })
        .catch((error) => {
          reject(error.message);
          // context.commit("articlesFailure", error.message);
        });
    });
  },
};

export default { actions, state, mutations, getters };

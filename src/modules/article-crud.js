import ArticleService from "@/service/article";

const state = {
  isLoading: false,
  title: "",
  description: "",
  body: "",
  article: null,
  error: null,
};
const getters = {};

const mutations = {
  articleStart(state) {
    state.isLoading = true;
    state.error = null;
  },
  articleSuccess(state, payload) {
    state.isLoading = false;
    console.log("success: ", payload);
  },
  articleFailure(state, payload) {
    state.isLoading = false;
    state.error = payload;
    console.log("Error: ", payload);
  },
};

const actions = {
  createArticle(context) {
    context.commit("articleStart");
    return new Promise((resolve, reject) => {
      ArticleService.createArticle({
        title: state.title,
        description: state.description,
        body: state.body,
        tagList: [],
      })
        .then((result) => {
          context.commit("articleSuccess", result.data.article);
          resolve(result.data.article.slug);
        })
        .catch((error) => {
          context.commit("articleFailure", error.response.data.errors);
          reject(error.response.data.errors);
          console.log(error);
        });
    });
  },
  editArticle(context) {
    return new Promise((resolve, reject) => {
      context.commit("articleStart");
      ArticleService.editArticle(context.state.article.slug, {
        title: state.title,
        description: state.description,
        body: state.body,
        tagList: [],
      })
        .then((result) => {
          context.commit("articleSuccess", result.data.article);
          resolve(result.data.article.slug);
        })
        .catch((error) => {
          context.commit("articleFailure", error.response.data.errors);
          reject(error.response.data.errors);
          console.log(error);
        });
    });
  },
  deleteArticle(context) {
    return new Promise((resolve, reject) => {
      context.commit("articleStart");
      ArticleService.deleteArticle(context.state.article.slug)
        .then((res) => {
          resolve(res);
          context.commit("articleSuccess", result.data.article);
        })
        .catch((error) => {
          context.commit("articleFailure", error);
          reject(error);
        });
    });
  },
};

export default { state, mutations, actions, getters };

import axios from "./axios.js";

const ArticleService = {
  getArticles() {
    return axios.get("/articles");
  },
  getArticleDetail(slug){
    return axios.get(`/articles/${slug}`)
  }
};

export default ArticleService;

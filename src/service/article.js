import axios from "./axios.js";

const ArticleService = {
  getArticles() {
    return axios.get("/articles");
  },
};

export default ArticleService;

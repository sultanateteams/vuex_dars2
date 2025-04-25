import axios from "./axios.js";

const ArticleService = {
  getArticles() {
    return axios.get("/articles");
  },
  getArticleDetail(slug) {
    return axios.get(`/articles/${slug}`);
  },
  createArticle(article) {
    return axios.post("/articles", { article });
  },
  editArticle(slug, article) {
    console.log(`/articles/${slug}`, { article });
    return axios.put(`/articles/${slug}`, { article });
  },
};

export default ArticleService;

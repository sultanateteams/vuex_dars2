<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <Article v-for="article in articles" :key="article" :article="article" />
    </div>
  </div>
</template>

<script>
import Article from "@/components/home/article.vue";

export default {
  name: "home",
  components: {
    Article,
  },
  mounted() {
    this.$store.dispatch("getArticles");
  },
  computed: {
    articles() {
      const data = this.$store.state.articles.articles;
      return Array.isArray(data) ? data : [];
    },
  },
};
</script>

<style></style>

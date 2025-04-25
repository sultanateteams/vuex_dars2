<template>
  <div class="py-6 rounded-l shadow border">
    <div
      class="mx-auto max-w-7xl px-3 text-center flex flex-col justify-between lg:px-8 h-100"
    >
      <div class="mx-auto max-w-2xl lg:mx-0">
        <div class="border h-40 relative">
          <small class="absolute top-0 left-2">
            {{ article.createdAt.slice(0, 10) }}
          </small>
          <small class="absolute top-0 right-2">
            {{ article.createdAt.slice(11, 16) }}
          </small>
          <img
            class="object-fit-fil w-100 h-100"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=400"
          />
        </div>
        <h3
          class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
        >
          {{ article.title }}
        </h3>
        <p class="mt-2 text-lg/8 text-gray-600">
          {{ article.description }}
        </p>
      </div>
      <div class="flex">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary flex"
            @click="goArticleDetail(article)"
          >
            Read more...
          </button>
          <button
            v-if="isThisOwner"
            type="button"
            @click="goArticleEdit(article)"
            class="btn btn-outline-secondary"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: false,
    },
  },
  computed: {
    isThisOwner() {
      return (
        this.article?.author.username ==
        this.$store.state.register.user.username
      );
    },
  },
  methods: {
    goArticleDetail(props) {
      this.$router.push(`/article-detail/${props.slug}`);
    },
    goArticleEdit(props) {
      this.$router.push(`/article-crud/${props.slug}`);
    },
  },
};
</script>

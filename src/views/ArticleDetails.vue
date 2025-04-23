<template>
  <div>
    <div class="flex flex-wrap">
      <p class="h2 mt-4 mb-2 col-12">
        {{ article?.title }}
      </p>
      <div class="col-9">
        <div class="opacity-60">Discription:</div>
        <div>{{ article?.description }}</div>
      </div>
      <div class="col-3 flex flex-wrap">
        <div class="col">
          <div class="opacity-60">Created at:</div>
          <div>
            <small>
              {{ article?.createdAt.slice(0, 10) + " " }}
            </small>
            <small>
              {{ article?.createdAt.slice(11, 16) }}
            </small>
          </div>
        </div>
        <div class="col">
          <div class="opacity-60">Updated at:</div>
          <div>
            <small>
              {{ article?.updatedAt.slice(0, 10) + " " }}
            </small>
            <small>
              {{ article?.updatedAt.slice(11, 16) }}
            </small>
          </div>
        </div>
      </div>
      <div class="col-12 flex flex-wrap pt-3">
        <div class="col-3">
          <div class="flex align-items-center gap-2">
            <span
              class="w-13 h-13 d-flex justify-center text-lime-100 bg-indigo-600"
              style="border-radius: 50%; align-items: center; font-size: 25px"
            >
              {{ article?.author.username[0].toUpperCase() }}
            </span>
            <span>
              {{ article?.author.username }}
            </span>
          </div>
          <div class="mt-4">
            {{ article?.author.bio }}
          </div>
        </div>
        <div class="col-9">
          <div class="opacity-60 mb-4 flex justify-between pr-20">
            <p>Body:</p>
            <p>Favourited: {{ Math.floor(Math.random() * 4564) }}</p>
            <p
              class="border px-3 py-1 bg-amber-300"
              style="border-radius: 10px"
            >
              {{ article?.author.following ? "Followed" : "Follow" }}
            </p>
            <div
              class="flex h-10 w-10 justify-center align-items-center"
              :class="
                article?.favorited
                  ? 'text-light bg-info'
                  : 'border bg-amber-300'
              "
              style="border-radius: 50%"
            >
              A
            </div>
          </div>
          <div>
            {{ article?.body }}
            {{ article?.body }}
            {{ article?.body }}
            {{ article?.body }}
            {{ article?.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleDetail",
  mounted() {
    this.$store.dispatch("getArticle", this.$route.params.slug);
  },
  computed: {
    article() {
      console.log(this.$store.state.articles.article);
      return this.$store.state.articles?.article;
    },
  },
};
</script>

<style></style>

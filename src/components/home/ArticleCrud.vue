<template>
  <div
    class="flex justify-center pt-4"
    style="flex-direction: column; align-items: center"
  >
    <h1>{{ isNewArticle ? "Create Article" : "Edit Article" }}</h1>
    <form @submit.prevent class="w-[75%]">
      <Input
        v-model="$store.state.articleCrud.title"
        placeholder="Title"
        type="text"
        id="articleCrud.id"
        :errorMessage="
          Array.isArray($store.state.articleCrud.error?.title)
            ? $store.state.articleCrud.error?.title[0]
            : ''
        "
      />
      <TextArea
        v-model="$store.state.articleCrud.description"
        placeholder="Discription"
        id="artficleCrud.id"
        :errorMessage="
          Array.isArray($store.state.articleCrud.error?.description)
            ? $store.state.articleCrud.error?.description[0]
            : ''
        "
      />
      <TextArea
        v-model="$store.state.articleCrud.body"
        placeholder="Article"
        id="articleCrud.isd"
        :errorMessage="
          Array.isArray($store.state.articleCrud.error?.body)
            ? $store.state.articleCrud.error?.body[0]
            : ''
        "
      />
      <div class="btn-group w-100">
        <Button
          @click="save"
          type="submit"
          :classBtn="'btn-success'"
          id="svubmitButton.id"
          :disabled="$store.state.articleCrud.isLoading"
          >{{ isNewArticle ? "Create New Article" : "Save changes" }}</Button
        >
        <Button
          v-if="!isNewArticle"
          @click="save"
          :classBtn="'btn-danger'"
          type="delete"
          id="svubmitBsutton.id"
          :disabled="$store.state.articleCrud.isLoading"
          >Delete</Button
        >
      </div>
    </form>
  </div>
</template>
<script>
import Input from "@/components/UI/Input.vue";
import TextArea from "../UI/TextArea.vue";
import Button from "../UI/Button.vue";
export default {
  name: "articleCrud",
  components: { Input, TextArea, Button },
  data() {
    return {
      url: "",
    };
  },
  computed: {
    isNewArticle() {
      return this.$route.params.slug == "new-one";
    },
    // isThisOwner() {
    //   return (
    //     this.article?.author.username ==
    //     this.$store.state.register.user.username
    //   );
    // },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.isNewArticle) {
        this.url = "createArticle";
      } else {
        this.url = "editArticle";
        this.$store
          .dispatch("getArticle", this.$route.params.slug)
          .then((result) => {
            this.$store.state.articleCrud.title = result.title;
            this.$store.state.articleCrud.description = result.description;
            this.$store.state.articleCrud.body = result.body;
            this.$store.state.articleCrud.article = result;
            console.log("this.$route.params.slug: ", result);
          });
      }
    },
    save() {
      this.$store.dispatch(this.url).then((res) => {
        this.$router.push(`/article-detail/${res}`);
      });
    },
  },
};
</script>
<style></style>

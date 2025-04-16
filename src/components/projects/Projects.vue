<template>
  <div>
    <h1 class="text-center">Count: {{ $store.state.projects.count }}</h1>
    <div class="flex gap-6">
      <Button
        :type="'button'"
        :id="'tbn234'"
        @click="increment"
        :classBtn="'btn-primary'"
        >Increment</Button
      >
      <Button
        :type="'button'"
        @click="dicrement"
        :id="'tbn234'"
        :classBtn="'btn-danger'"
        >Increment</Button
      >
    </div>
  </div>
</template>
<script>
import Button from "../UI/Button.vue";
export default {
  components: { Button },
  name: "projects",
  mounted() {
    // console.log("store: ", this.$store);
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log("this.$store.state: ", this.$store);
    },
    dicrement() {
      this.$store.commit("dicrement");
    },
  },
};
</script>
<style></style>

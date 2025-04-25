<template>
  <div>
    <h1>Not found</h1>
    <h1>
      <a href="/">Bosh sahifa ga qaytish</a>
    </h1>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  mounted() {
    window.addEventListener("popstate", this.handlePopState);
  },
  beforeUnmount() {
    window.removeEventListener("popstate", this.handlePopState);
  },
  methods: {
    handlePopState() {
      console.log("Back bosildi");
      this.$router.push("/"); // yoki istalgan sahifa
    },
  },
};
</script>
<style></style>

<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    console.log(this.$store)
    this.$store.dispatch('getArticles')
  },
};
</script>

<style></style>

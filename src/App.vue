<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavView from "./views/NavView.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { getItem } from "./helpers/persistaneStorage";
const store = useStore();
onMounted(() => {
  const token = getItem("token");
  if (!!token) {
    store.dispatch("getCurrentUser");
  }
  console.log("store:  ", store);
  console.log("token:  ", token);
});
</script>

<template>
  <header class="container">
    <NavView />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>

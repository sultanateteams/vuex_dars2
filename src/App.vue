<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavView from "./views/NavView.vue";

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

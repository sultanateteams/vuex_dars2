<template>
  <button :type="type" class="btn w-100" :class="class"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      default: "username",
    },
    class: {
      type: String,
      default: "btn-outline-primary",
    },
  },
};
</script>

<style></style>

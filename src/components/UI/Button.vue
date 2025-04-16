<template>
  <button
    :type="type"
    class="btn w-100"
    :disabled="disabled"
    :class="[{ disabled: disabled }, classBtn]"
  >
    <slot></slot>
  </button>
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
    disabled: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      default: "username",
    },
    classBtn: {
      type: String,
      default: "btn-outline-primary",
    },
  },
};
</script>

<style></style>

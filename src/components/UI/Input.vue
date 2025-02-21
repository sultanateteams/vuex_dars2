<template>
  <div class="form-floating mb-3">
    <input
      :type="type"
      class="form-control"
      :id="id"
      :autocomplete="username"
      :placeholder="modelValue"
    />
    <label :for="id">{{ modelValue }}</label>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      default: "username",
    },
  },
};
</script>
<style></style>

<template>
  <div class="form-floating mb-3">
    <input
      :type="type"
      class="form-control"
      :id="id"
      v-model="inputValue"
      :autocomplete="type"
      :placeholder="placeholder"
    />
    <label :for="id">{{ placeholder }}</label>
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    errorMessage: {
      type: String,
      required: false,
    },
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
    placeholder: {
      type: String,
      default: "username",
    },
  },
  methods: {},
  mounted() {
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
<style>
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>

<template>
  <div class="form-floating mb-3">
    <textarea
      :name="placeholder"
      class="form-control"
      :id="id"
      v-model="inputValue"
      :placeholder="placeholder"
      style="height: 200px;"
    ></textarea>
    <label :for="id">{{ placeholder }}</label>
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>
<script>
export default {
  name: "TextArea",
  props: {
    errorMessage: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
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
  mounted() {},
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

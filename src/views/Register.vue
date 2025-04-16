<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Register
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <ValidationError />
      <form class="space-y-6" action="#" method="POST">
        <Input
          v-model="$store.state.register.nameInput"
          :placeholder="nameInput.placeholder"
          :errorMessage="
            Array.isArray($store.state.register.error?.username)
              ? $store.state.register.error.username[0]
              : ''
          "
          :type="nameInput.type"
          :id="nameInput.id"
        />
        <Input
          v-model="$store.state.register.surnameInput"
          :placeholder="surnameInput.placeholder"
          :type="surnameInput.type"
          :id="surnameInput.id"
        />
        <Input
          v-model="$store.state.register.emailInput"
          :placeholder="emailInput.placeholder"
          :errorMessage="
            Array.isArray($store.state.register.error?.email)
              ? $store.state.register.error.email[0]
              : ''
          "
          :type="emailInput.type"
          :id="emailInput.id"
        />
        <Input
          v-model="$store.state.register.passwordInput"
          :placeholder="passwordInput.placeholder"
          :errorMessage="
            Array.isArray($store.state.register.error?.password)
              ? $store.state.register.error.password[0]
              : ''
          "
          :type="passwordInput.type"
          :id="passwordInput.id"
        />
        <Input
          v-model="$store.state.register.confirmPasswordInput"
          :placeholder="confirmPasswordInput.placeholder"
          :type="confirmPasswordInput.type"
          :id="confirmPasswordInput.id"
        />
        <Button
          @click="registerSubmit"
          :type="submitButton.type"
          :id="submitButton.id"
          :disabled="$store.state.register.isLoading"
          >Register</Button
        >
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
import ValidationError from "@/components/validation/ValidationError.vue";
export default {
  components: { Input, Button, ValidationError },
  name: "register",

  data() {
    return {
      nameInput: {
        placeholder: "Name",
        type: "text",
        id: "name234",
      },
      surnameInput: {
        placeholder: "Surname",
        type: "text",
        id: "surname234",
      },
      emailInput: {
        placeholder: "Email address",
        type: "email",
        id: "emil234",
      },
      passwordInput: {
        placeholder: "Password",
        type: "password",
        id: "passordl234",
      },
      confirmPasswordInput: {
        placeholder: "Confirm password",
        type: "password",
        id: "confirmPasswordInputdl234",
      },
      submitButton: {
        type: "button",
        id: "butondl234",
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.register.isLoading;
    },
  },
  mounted() {},
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      this.$store.dispatch("userRegister");
    },
  },
  unmounted() {
    this.$store.commit("clearData");
  },
};
</script>
<style></style>

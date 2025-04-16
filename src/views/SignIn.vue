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
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="(e) => signIn(e)" method="POST">
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
          :type="passwordInput.type"
          :id="passwordInput.id"
        />
        <Button
          :type="submitButton.type"
          :id="submitButton.id"
          :disabled="$store.state.register.isLoading"
        >
          Sign in
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
export default {
  components: { Input, Button },
  name: "sign-in",
  unmounted() {
    this.$store.state.register.emailInput = "";
    this.$store.state.register.passwordInput = "";
  },
  data() {
    return {
      emailInput: {
        placeholder: "Email address",
        type: "text",
        id: "email234",
      },
      passwordInput: {
        placeholder: "Password",
        type: "password",
        id: "passwordl234",
      },
      submitButton: {
        type: "submit",
        id: "buttondl234",
      },
    };
  },
  methods: {
    signIn(e) {
      e.preventDefault();
      this.$store.dispatch("userLogin");
    },
  },
  unmounted() {
    this.$store.commit("clearData");
  },
};
</script>
<style></style>

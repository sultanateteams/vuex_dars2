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
      <form class="space-y-6" action="#" method="POST">
        <Input
          v-model="nameInput.username"
          :type="nameInput.type"
          :id="nameInput.id"
        />
        <Input
          v-model="surnameInput.username"
          :type="surnameInput.type"
          :id="surnameInput.id"
        />
        <Input
          v-model="emailInput.username"
          :type="emailInput.type"
          :id="emailInput.id"
        />
        <Input
          v-model="passwordInput.username"
          :type="passwordInput.type"
          :id="passwordInput.id"
        />
        <Input
          v-model="confirmPasswordInput.username"
          :type="confirmPasswordInput.type"
          :id="confirmPasswordInput.id"
        />
        <Button :type="submitButton.type" :id="submitButton.id"
          >Register</Button
        >
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
export default {
  components: { Input, Button },
  name: "register",
  data() {
    return {
      nameInput: {
        username: "Name",
        type: "text",
        id: "name234",
      },
      surnameInput: {
        username: "Surname",
        type: "text",
        id: "surname234",
      },
      emailInput: {
        username: "Email address",
        type: "email",
        id: "emil234",
      },
      passwordInput: {
        username: "Password",
        type: "password",
        id: "passordl234",
      },
      confirmPasswordInput: {
        username: "Confirm password",
        type: "password",
        id: "confirmPasswordInputdl234",
      },
      submitButton: {
        type: "button",
        id: "butondl234",
      },
    };
  },
};
</script>
<style></style>

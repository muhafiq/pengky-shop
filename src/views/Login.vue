<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const submitForm = () => {
  console.log({
    user: username.value,
    pw: password.value,
  });
};
</script>

<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <div
      class="w-4/5 h-96 flex flex-col justify-center bg-back p-8 rounded-xl shadow-md md:h-3/5 md:w-2/3 lg:h-4/5 lg:flex-row lg:items-center"
    >
      <div class="flex flex-col items-center my-4">
        <img class="w-1/3 lg:w-2/3" src="/favicon.svg" alt="logo img" />
        <h1 class="text-xl font-bold text-primary md:text-2xl">Login Dulu Kang</h1>
      </div>
      <div>
        <form @submit.prevent="submitForm" class="flex flex-col justify-center mx-2">
          <label class="text-sm ml-1 my-1 md:text-base" for="username">Username</label>
          <input
            v-model="username"
            class="py-2 px-4 rounded-xl outline-primary"
            placeholder="..."
            type="text"
            id="username"
            autocomplete="off"
          />
          <label class="text-sm ml-1 my-1 md:text-base" for="password">Password</label>
          <input
            v-model="password"
            class="py-2 px-4 rounded-xl outline-primary"
            placeholder="..."
            type="password"
            id="password"
            autocomplete="off"
          />

          <button
            class="py-2 px-6 bg-primary text-white font-bold self-center my-8 rounded-xl duration-300 hover:bg-darker"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

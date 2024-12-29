<script setup lang="ts">
import { ref } from "vue";
import {RouterLink} from "vue-router";
import {supabase} from "../supabase/init.ts";
import {useRouter} from "vue-router";

const router = useRouter();

const email = ref<string | null>(null);
const password = ref<string | null>(null);
const confirmPassword = ref<string | null>(null);
const errMSG = ref<string | null>(null);

async function handleSubmit ():Promise<any> {
  if(email.value === null || password.value === null || confirmPassword.value === null) {
    errMSG.value = "Please fill in all fields";
    return;
  }

  if(password.value !== confirmPassword.value) {
    errMSG.value = "Passwords do not match";
    return;
  }

  try {
    let {data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if(error) throw error;

    console.log(data);

    email.value = null;
    password.value = null;
    confirmPassword.value = null;
    errMSG.value = null;

    router.push({name: 'Home'});
  } catch (e) {
    if(e instanceof Error) {
      errMSG.value = e.message;
      console.log(errMSG.value)
    }
  }
};
</script>

<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error handling -->
    <div
      v-if="errMSG"
      class="mb-10 p-4 rounded-md bg-light-gray shadow-lg"
    >
      <p class="text-red-500">
        {{ errMSG }}
      </p>
    </div>

    <!-- Register -->
    <form
      class="p-8 flex flex-col bg-light-gray rounded-md shadow-lg"
      @submit.prevent="handleSubmit"
    >
      <h1 class="text-3xl text-at-light-green mb-4">Register</h1>

      <!-- Email -->
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-at-light-green">
          Email
        </label>
        <input
          type="text"
          id="email"
          required
          class="p-2 text-gray-500 focus:outline-none"
          v-model="email"
        />
      </div>

      <!-- Password -->
      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          v-model="password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="flex flex-col mb-2">
        <label
          for="confirmPassword"
          class="mb-1 text-sm text-at-light-green"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          required
          class="p-2 text-gray-500 focus:outline-none"
          v-model="confirmPassword"
        />
      </div>

      <button
        class="bg-at-light-green rounded-sm text-white py-1 hover:border-at-light-green hover:text-at-light-green hover:bg-white mt-6 px-6 self-start text-sm duration-200 border-2 border-transparent"
        type="submit"
      >
        Register
      </button>

      <RouterLink :to="{name: 'Login'}" class="text-sm mt-6 text-center text-gray-500">
        Already have an account? <span class="text-at-light-green">Login</span>
      </RouterLink>
    </form>
  </div>
</template>

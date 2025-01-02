<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { supabase } from "../supabase/init.ts";
import Button from "../components/UI/Button/Button.vue";

const router = useRouter();

const email = ref<string | null>(null);
const password = ref<string | null>(null);
const errMSG = ref<string | null>(null);

const isDisabled = computed((): boolean => {
  return errMSG.value !== null;
});

console.log(isDisabled.value);

async function handleSubmit(): Promise<any> {
  if (email.value === null || password.value === null) {
    errMSG.value = "Please fill in all fields";
    return;
  }

  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    console.log(data);

    email.value = "";
    password.value = "";
    errMSG.value = "";

    router.push({ name: "Home" });
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      errMSG.value = e.message;
      email.value = "";
      password.value = "";
    }
  }
}
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

      <Button type="submit" :disabled="isDisabled" variant="secondary">
        Login
      </Button>

      <RouterLink
        :to="{ name: 'Register' }"
        class="text-sm mt-6 text-center text-gray-500"
      >
        Don't have an account?
        <span class="text-at-light-green">Register</span>
      </RouterLink>
    </form>
  </div>
</template>

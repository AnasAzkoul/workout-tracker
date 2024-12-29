<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img
          src="../assets/images/dumbbell-light.png"
          alt="company logo dumbbell"
          class="w-14"
        />
        <h1 class="text-lg">Active Tracker</h1>
      </div>

      <ul class="flex flex-1 gap-x-10 justify-end">
        <RouterLink class="cursor-pointer" :to="{ name: 'Home' }">
          Home
        </RouterLink>
        <RouterLink class="cursor-pointer" :to="{ name: 'Create' }">
          Create
        </RouterLink>
        <RouterLink class="cursor-pointer" :to="{ name: 'Login' }">
          Login
        </RouterLink>
        <li class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

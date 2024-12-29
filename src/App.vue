<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="font-Poppins min-h-full">
    <Navigation />
    <RouterView />
  </div>
</template>

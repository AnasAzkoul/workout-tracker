<script setup lang="ts">
import { type HTMLAttributes, type LabelHTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];
  for?: LabelHTMLAttributes["for"];
}

const props = defineProps<Props>();
</script>

<template>
  <label
      :for="props.for"
      class="mb-1 text-sm text-at-light-green"
  >
    <slot></slot>
  </label>
</template>

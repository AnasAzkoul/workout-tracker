<script setup lang="ts">
import { defineProps, type HTMLAttributes } from "vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "../../../lib/utils";

interface Props {
  isDisabled?: boolean;
  variant?: "primary" | "secondary";
  class?: HTMLAttributes["class"];
  isIcon?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant }), props.class)"
    type="submit"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

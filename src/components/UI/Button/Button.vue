<script setup lang="ts">
import {
  defineProps,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from "vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "../../../lib/utils";

interface Props {
  isDisabled?: boolean;
  variant?: "primary" | "secondary";
  class?: HTMLAttributes["class"];
  type?: ButtonHTMLAttributes["type"];
  isIcon?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant }), props.class)"
    :type="type"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

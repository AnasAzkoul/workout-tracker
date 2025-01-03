<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  type HTMLAttributes,
  type InputTypeHTMLAttribute,
} from "vue";
// import { type InputVariants, inputVariants } from ".";
// import { cn } from "../../../lib/utils";

interface Props {
  type?: InputTypeHTMLAttribute;
  class?: HTMLAttributes["class"];
  id?: HTMLAttributes["id"];
  modelValue: string | null;
}

defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

function handleChange(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <input
    :type="type"
    :id="id"
    class="p-2 text-gray-500 focus:outline-none"
    :value="modelValue"
    @input="handleChange"
  />
</template>

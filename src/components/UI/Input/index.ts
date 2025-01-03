import { type VariantProps, cva } from "class-variance-authority";

// export { default as Input } from "./Input.vue";

export const inputVariants = cva("p-2 text-gray-500 focus:outline-none");

export type InputVariants = VariantProps<typeof inputVariants>;

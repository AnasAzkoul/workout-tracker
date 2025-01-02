import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "rounded-sm py-1 mt-6 px-6 self-start text-sm duration-200 border-2 border-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-at-light-green  text-white  hover:border-at-light-green hover:text-at-light-green hover:bg-white",
        secondary:
          "bg-light-gray text-at-light-green hover:bg-at-light-green hover:text-white border-at-light-green",
      },

      defaultVariants: {
        variant: "default",
      },
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

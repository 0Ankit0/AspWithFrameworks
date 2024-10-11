/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#7c3aed', // violet-600
          light: '#c4b5fd', // lighter shade for hover
          dark: '#6d28d9', // darker shade for focus
        },
        secondary: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#93c5fd', // lighter shade for hover
          dark: '#2563eb', // darker shade for focus
        },
        success: {
          DEFAULT: '#10b981', // green-500
          light: '#6ee7b7', // lighter shade for hover
          dark: '#059669', // darker shade for focus
        },
        danger: {
          DEFAULT: '#ef4444', // red-500
          light: '#fca5a5', // lighter shade for hover
          dark: '#dc2626', // darker shade for focus
        },
        warning: {
          DEFAULT: '#f59e0b', // yellow-500
          light: '#fde68a', // lighter shade for hover
          dark: '#d97706', // darker shade for focus
        },
        info: {
          DEFAULT: '#0ea5e9', // sky-500
          light: '#7dd3fc', // lighter shade for hover
          dark: '#0284c7', // darker shade for focus
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

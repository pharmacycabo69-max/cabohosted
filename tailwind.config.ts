import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: { DEFAULT: '#F4EDE4', dark: '#E8DDCF' },
        navy: { DEFAULT: '#0F2341', light: '#1B3A66' },
        terracotta: { DEFAULT: '#C4663D', dark: '#A8532E' },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   'phone': '375px',
    //   // => @media (min-width: 375px) { ... }

    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      colors: {
        'primary-blue': '#38b6ff',
      },

    },
  },
  plugins: [],
};
export default config;

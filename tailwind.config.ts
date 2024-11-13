import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'foreground': "var(--foreground)",
        'primary': 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'secondary': 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'accent': 'var(--accent)',
       },
       gridTemplateColumns: {
        'cus-1-6fr': '1fr 6fr',
        'cus-1-5fr': '1fr 5fr',
        'cus-5-2fr': '5fr 2fr',
        'cus-5-3fr': '5fr 3fr',
        'cus-4-3fr': '4fr 3fr',
        'cus-1-1fr': '1fr 1fr',
        'cus-5-1fr': '5fr 1fr',
        'cus-5-1.5fr': '5fr 1.5fr',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "poppins": ['var(--ff-primary)'],
        'comfortaa': 'var(--ff-blog)'
      }
    },
  },
  plugins: [],
};
export default config;

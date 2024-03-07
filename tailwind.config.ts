import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                'card': '48px',

            },
            colors: {
                'yandex': '#FCE000',
                'dodo-surface': '#1A1A1A',
                'sw': '#1F93EFFF',
                'hh': "#0dc267",
                'hh2': "#468ffd"
            },
        },
    },
    plugins: [],
};
export default config;

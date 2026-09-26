/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1f5c99',
                    dark: '#133f70',
                },
                accent: '#2b8a6e',
                muted: '#667085',
                bg: '#f5f7fb',
                surface: '#ffffff',
                text: '#162033',
                line: '#e4e8f0',
                soft: '#eaf3fb',
                warn: '#fff5d8',
                danger: '#ffeded',
            },
            borderRadius: {
                'card': '18px',
            },
            boxShadow: {
                'card': '0 12px 30px rgba(20,44,80,.08)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

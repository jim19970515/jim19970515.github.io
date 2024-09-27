/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#D88E00',
            },
            borderRadius: {
                5: '5px',
                10: '10px',
                20: '20px',
                30: '30px',
                40: '40px',
            },
        },
    },
    plugins: [],
}
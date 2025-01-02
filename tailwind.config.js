/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js의 페이지 폴더
    "./components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 폴더
    "./app/**/*.{js,ts,jsx,tsx}", // app 폴더 (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ Next.js 13+ (app router 사용 시)
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ 기존 pages/ 디렉토리 지원
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ 컴포넌트 내부 Tailwind 감지
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

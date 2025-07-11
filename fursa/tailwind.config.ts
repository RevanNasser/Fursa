import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        naskh: ['NotoNaskhArabic-Regular', 'Tahoma', 'Geeza Pro', 'Arial', 'sans-serif'],
        naskhBold: ['NotoNaskhArabic-Bold', 'Tahoma', 'Geeza Pro', 'Arial', 'sans-serif'],
        lifta: ['Lifta-Black', 'Tahoma', 'Geeza Pro', 'Arial', 'sans-serif'],
        sans: ['NotoNaskhArabic-Regular', 'Tahoma', 'Geeza Pro', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 
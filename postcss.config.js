import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss,
    autoprefixer,
  },
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFA",
        black: "#0E0E0E",
        gray: {
          50: "#F5F5F5",
          100: "#ECECEE",
          200: "#DDDEE0",
          300: "#AAACB2",
          400: "#95969B",
          500: "#7A7D82",
          600: "#6F7176",
          700: "#57585C",
          800: "#434448",
          850: "#333537",
          900: "#29292C",
          950: "#1B1B1B",
        },
      },
      fontFamily: {
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // 타이틀
        "display-1": ["48px", "140%"],
        "display-2": ["40px", "140%"],
        "display-3": ["36px", "140%"],
        "display-4": ["32px", "140%"],
        // 본문
        "headline-1": ["28px", "150%"],
        "headline-2": ["24px", "150%"],
        "body-1": ["20px", "150%"],
        "body-2": ["18px", "150%"],
        "body-3": ["16px", "150%"],
        // 캡션
        "caption-1": ["14px", "150%"],
        "caption-2": ["12px", "150%"],
        "caption-3": ["10px", "150%"],
      },
      boxShadow: {
        1: "0px 4px 8px 0px rgba(0, 0, 0, 0.03), 4px 0px 8px 0px rgba(0, 0, 0, 0.03)",
        2: "0px 4px 16px 0px rgba(0, 0, 0, 0.05), 4px 0px 16px 0px rgba(0, 0, 0, 0.05)",
        3: "0px 4px 32px 0px rgba(0, 0, 0, 0.05), 4px 0px 32px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

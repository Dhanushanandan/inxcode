export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(224, 76%, 48%)",
          light: "hsl(224, 76%, 58%)",
          dark: "hsl(224, 76%, 38%)",
        },
        secondary: {
          DEFAULT: "hsl(259, 94%, 51%)",
          light: "hsl(259, 94%, 61%)",
        },
        accent: {
          DEFAULT: "hsl(194, 98%, 60%)",
          light: "hsl(194, 98%, 70%)",
        },
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(225, 15%, 20%)",
        muted: "hsl(220, 13%, 96%)",
        mutedFg: "hsl(220, 9%, 46%)",
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(36, 60, 120, 0.08)",
        medium: "0 4px 16px 0 rgba(36, 60, 120, 0.12)",
        large: "0 8px 32px 0 rgba(36, 60, 120, 0.16)",
        glow: "0 0 16px 2px hsl(224, 76%, 48%, 0.5)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, hsl(224,76%,48%) 0%, hsl(259,94%,51%) 100%)',
        'hero-gradient': 'linear-gradient(90deg, hsl(224,76%,48%) 0%, hsl(259,94%,51%) 50%, hsl(194,98%,60%) 100%)',
        'subtle-gradient': 'linear-gradient(90deg, hsl(220,13%,96%) 0%, hsl(0,0%,100%) 100%)',
      },
    },
  },
  plugins: [],
};

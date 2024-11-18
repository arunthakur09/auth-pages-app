/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Added autoprefixer plugin for cross-browser support
  },
};

export default config;

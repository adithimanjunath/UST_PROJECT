module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.js"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ]
};

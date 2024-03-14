module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js", // Include files for coverage measurement
    "!**/node_modules/**" // Exclude files in node_modules directory
  ]
};


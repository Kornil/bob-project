module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx)$",
  transform: {
    "^.+\\.(tsx?|jsx?)$": "babel-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/client/tests/setup.js",
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  testURL: 'http://localhost',
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/src/client/index.jsx",
    "/src/server/index.js"
  ]
};

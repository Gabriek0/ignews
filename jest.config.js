const config = {
    // ignore the folders:
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],

    // converts files  that are written with ts
    // babel converts:
    transform: {"\\.[jt]sx?$": "babel-jest"},
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    testEnvironment: "jsdom",

    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    }
};

module.exports = config;
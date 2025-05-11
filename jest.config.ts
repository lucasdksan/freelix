import nextJest from "next/jest";

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@/components/(.*)$": "<rootDir>/frontend/components/$1",
        "^@/services/(.*)$": "<rootDir>/frontend/services/$1",
        "^@/utils/(.*)$": "<rootDir>/utils/$1",
    
        "^@backend/(.*)$": "<rootDir>/backend/$1",
        "^@controllers/(.*)$": "<rootDir>/backend/controllers/$1",
        "^@services/(.*)$": "<rootDir>/backend/services/$1",
        "^@dtos/(.*)$": "<rootDir>/backend/dtos/$1",
        "^@views/(.*)$": "<rootDir>/backend/views/$1",
    
        "\\.(css|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
    testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
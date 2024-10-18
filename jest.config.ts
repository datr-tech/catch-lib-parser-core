export default {
	coveragePathIgnorePatterns: [
		'<rootDir>/.jest',
		'<rootDir>/test/fixtures',
		'<rootDir>/test/helpers',
	],
	coverageReporters: ['clover', 'text'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	moduleNameMapper: {
		'@app/(.*)': '<rootDir>/src/$1',
		'@dist/(.*)': '<rootDir>/dist/$1',
		'@test/(.*)': '<rootDir>/test/$1',
	},
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/.jest/setupPaths.ts'],
	testEnvironment: 'node',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};

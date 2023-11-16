export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		'@web/(.*)$': '<rootDir>/src/$1',
	},
};

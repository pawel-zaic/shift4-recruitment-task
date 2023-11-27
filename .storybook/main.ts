import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	viteFinal: async (config, { configType }) => {
		return {
			...config,
			resolve: {
				alias: [
					{
						find: '@web/',
						replacement: path.resolve(__dirname, '../src/'),
					},
					{
						find: '@web/components',
						replacement: path.resolve(__dirname, '../src/components'),
					},

					{
						find: '@web/lib',
						replacement: path.resolve(__dirname, '../src/lib'),
					},
					{
						find: '@web/assets',
						replacement: path.resolve(__dirname, '../src/assets'),
					},
					{
						find: '@web/utils',
						replacement: path.resolve(__dirname, '../src/utils'),
					},
					{
						find: '@web/styles',
						replacement: path.resolve(__dirname, '../src/styles'),
					},
					{
						find: '@web/types',
						replacement: path.resolve(__dirname, '../src/types'),
					},
				],
			},
			define: {
				'process.env.NODE_DEBUG': false,
			},
		};
	},
};
export default config;

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
						replacement: path.resolve(__dirname, '../src/render/'),
					},
					{
						find: '@web/components',
						replacement: path.resolve(__dirname, '../src/render/components'),
					},

					{
						find: '@web/lib',
						replacement: path.resolve(__dirname, '../src/render/lib'),
					},
					{
						find: '@web/assets/icons',
						replacement: path.resolve(__dirname, '../src/render/assets/icons'),
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

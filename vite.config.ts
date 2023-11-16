import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@web': path.resolve(__dirname, './src'),
			'@mui/styled-engine': '@mui/styled-engine-sc',
		},
	},
});

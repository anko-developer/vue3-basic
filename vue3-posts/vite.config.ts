import path from 'path';
import { fileURLToPath, URL } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dirs: ['src/components/app'],
			dts: true,
		}),
		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',
		}),
	],
	// mode: 'production',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});

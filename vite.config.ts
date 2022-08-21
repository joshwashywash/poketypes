import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/poketypes/',
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: resolve('src/lib'),
		},
	},
});

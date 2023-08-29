import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			components: '/src/components/',
			hooks: '/src/hooks/',
			pages: '/src/pages/',
			Redux: '/src/redux/',
			assets: '/src/assets/',
			services: '/src/services/',
		},
	},
})

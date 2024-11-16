import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'node',
		silent: true,
		coverage: {
			all: false,
			provider: 'v8',
			reporter: ['text', 'lcov'],
		},
		include: [
			'**/__tests__/**/*.spec.ts',
			'**/*.test.ts',
			'**/*.{test,spec}.ts',
		],
		exclude: ['node_modules/'],
	},

	plugins: [tsconfigPaths()],
});

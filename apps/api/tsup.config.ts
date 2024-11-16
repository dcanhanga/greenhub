import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  "entry": ["src/main/index.ts", "!src/**/*.spec.ts", "!src/**/*.test.ts"],
  entryPoints: ["src/main/index.ts"],
  clean: true,
  format: ["cjs"],
		"minify": true,
		"splitting": true,
		"sourcemap": true,

  ...options,
}));
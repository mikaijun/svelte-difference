import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: false,
	 },
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		// CompilerOptions.runes を設定すると、@storybook/addon-svelte-csf のライブラリとの互換性の問題により、 Storybook が起動しなくなるため、dynamicCompileOptions を使って該当ファイルに対して設定を上書きしています。
		// See https://github.com/storybookjs/addon-svelte-csf/issues/290#issuecomment-2801321530
		dynamicCompileOptions({ filename }) {
			if (filename.includes('node_modules/@storybook/addon-svelte-csf')) {
				 
				return { runes: undefined };
			}
			return { runes: false };
		}
	}
};

export default config;

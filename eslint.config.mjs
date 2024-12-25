import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import astroSwGlobals from '@ayco/astro-sw/globals';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node, ...astroSwGlobals } }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'dist/*',
      '.output/*',
      '.astro/*',
      '**/node_modules/*',
      '**/coverage/*',
      '**/env.d.ts'
    ],
  },
]

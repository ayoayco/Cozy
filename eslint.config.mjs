import globals from 'globals'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsPlugin from '@eslint/js'
import tseslint from 'typescript-eslint'
import astroSwGlobals from '@ayco/astro-sw/globals'
import astroParser from 'astro-eslint-parser'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...astroSwGlobals,
      },
    },
  },
  // add more generic rule sets here, such as:
  jsPlugin.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: [
      'dist/*',
      '.output/*',
      '.astro/*',
      'site/*',
      'templates/*',
      '**/node_modules/*',
      '**/env.d.ts',
    ],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
]

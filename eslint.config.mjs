import globals from 'globals'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsPlugin from '@eslint/js'
import tseslint from 'typescript-eslint'
import astroSwGlobals from '@ayco/astro-sw/globals'
import astroParser from 'astro-eslint-parser'

import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

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
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['**/env.d.ts'],
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

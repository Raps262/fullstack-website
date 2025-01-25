import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' },
    rules: { 'linebreak-style': ['error', 'windows'] } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
];
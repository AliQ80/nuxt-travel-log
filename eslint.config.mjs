// @ts-check
import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintParserVue from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    ignores: ['.pnpm-store/**'],
  }),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: eslintParserVue,
    },
  },
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

      // or configure rules individually
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100 }],
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: './assets/css/main.css',
        // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
        tailwindConfig: 'tailwind.config.js',
      },
    },
  },
)

var config = require('./src/config/tailwind/')
module.exports = {
    configPath: './tailwind.config.js',
    cssPath: './src/assets/scss/tailwind.scss',
    exposeConfig: false,
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    experimental: {
        darkModeVariant: true,
        applyComplexClasses: true
    },
    darkMode: 'class',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: config.theme,
    variants: config.variants,
    presets: config.presets,
    variants: {
        extend: {
          // ...
         display: ['hover', 'focus', 'group-hover'],
         border: ['hover', 'focus', 'group-hover'],
        }
      }
}
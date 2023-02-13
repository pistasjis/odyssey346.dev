import {
    transformerDirectives,
    presetWebFonts,
    presetWind,
    defineConfig,
    presetIcons,
    transformerVariantGroup,
    presetTypography,
    presetUno
} from 'unocss'

export default defineConfig({
    presets: [
        presetWind({
          dark: "media"
        }),
        presetWebFonts({
          provider: 'bunny', // default provider
          fonts: {
            // these will extend the default theme
            sans: ["Outfit", "sans-serif"],
          },
        }),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetUno(), // required
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    theme: {
        colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            accent: 'var(--accent)',
            secondbackground: 'var(--second-background)',
            thirdbackground: 'var(--third-background)',
        },
        fontFamily: {
          sans: ["Outfit", "sans-serif"],
        },
    }
})
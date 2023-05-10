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
            sans: ["Space Grotesk", "Outfit", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"],
          },
        }),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetUno(), // required
        presetTypography({
          selectorName: 'prose',
          cssExtend: {
            'pre': {
              'background': 'var(--fourth-background) !important',
              'font-family': 'var(--font-mono) !important',
              'border-radius': 'initial !important',
              'white-space': 'pre-wrap !important',
              'word-break': 'break-word !important',
            },
            'a': {
              'text-underline-offset': '5px',
            },
            'a:hover': {
              'color': 'var(--accent)',
              'transition': 'ease-in-out 0.25s',
            },
            'code': {
              'background': 'var(--fourth-background) !important',
              'padding': '0.25rem 0.5rem',
              'border-radius': 'initial !important',
              'font-weight': '500',
              'white-space': 'pre-wrap !important',
            },
            'code::before': {
              'display': 'none',
            },
            'code::after': {
              'display': 'none',
            },
            'img': {
              'border-radius': '0.5rem',
              'max-width': '100%',
            },
          }
        }),
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
            fourthbackground: 'var(--fourth-background)',
        },
        fontFamily: {
          sans: ["Space Grotesk", "Outfit", "sans-serif"],
        },
    }
})
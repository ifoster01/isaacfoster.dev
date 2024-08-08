import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";
export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],
    prefix: 'panda',
    // Radix Preset
    presets: [radixColorsPreset()],
    // Setup layers
    layers: {
        reset: "panda_reset",
        base: "panda_base",
        tokens: "panda_tokens",
        recipes: "panda_recipes",
        utilities: "panda_utilities"
    },
    // Useful for theme customization
    theme: {
        extend: {
            breakpoints: {
                sm: "520px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1640px",
            }
        },
    },

    // The output directory for your css system
    outdir: "styled-system",

    // The JSX framework to use
    jsxFramework: "react",
    // Define Global CSS
    globalCss: defineGlobalStyles({
        "*": {
            boxSizing: "border-box",
            p: 0,
            m: 0,
        },
        "html, body": {
            maxWidth: "screen",
            overflowX: "hidden",
        },
        a: {
            color: "inherit",
            textDecoration: "none",
        }
    }),
});

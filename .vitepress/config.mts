import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Dzyanino",
    description: "Official website of Doneli Dzyanino",

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
            { text: "Skills", link: "/skills" },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/Dzyanino" },
            {
                icon: "facebook",
                link: "https://web.facebook.com/donelidzyanino.manasintsoa",
            },
            { icon: "twitter", link: "https://x.com/dzyanino_" },
        ],

        footer: {
            copyright: "Copyright &copy; 2024 - Doneli Dzyanino MANASINTSOA",
        },
    },

    srcDir: "src",

    locales: {
        root: {
            label: "English",
            lang: "en",
        },
        // fr: {
        //     label: "French",
        //     lang: "fr",
        //     link: "/fr",
        // },
    },
});

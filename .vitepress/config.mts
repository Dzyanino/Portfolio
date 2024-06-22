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

        // sidebar: [
        //     {
        //         text: "Test",
        //         items: [
        //             { text: "Home", link: "/" },
        //             { text: "About", link: "/about" },
        //             { text: "Skills", link: "/skills" },
        //         ],
        //     },
        // ],

        socialLinks: [{ icon: "github", link: "https://github.com/Dzyanino" }],

        footer: {
            message: "Yo man",
            copyright: "Copyright 2024 Doneli Dzyanino M",
        },
    },

    srcDir: "src",

    locales: {
        root: {
            label: "English",
            lang: "en",
        },
        fr: {
            label: "French",
            lang: "fr",
            link: "/fr",
        },
    },
});

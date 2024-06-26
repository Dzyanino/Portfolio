import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Dzyanino",
    description: "Official website of Doneli Dzyanino",

    head: [
        ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "",
            },
        ],
        [
            "link",
            {
                href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                rel: "stylesheet",
            },
        ],
        [
            "link",
            {
                href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap",
                rel: "stylesheet",
            },
        ],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
            { text: "Skills", link: "/skills" },
        ],

        search: {
            provider: "local",
            options: {
                locales: {
                    fr: {
                        translations: {
                            button: {
                                buttonText: "Rechercher",
                                buttonAriaLabel: "Rechercher quelque chose",
                            },
                            modal: {
                                noResultsText: "Aucun résultat",
                                resetButtonTitle: "Réinitialiser",
                                displayDetails: "Afficher les détails",
                                footer: {
                                    closeText: "pour fermer",
                                    closeKeyAriaLabel: "Fermer",
                                    navigateText: "pour naviguer",
                                    selectText: "pour sélectionner",
                                    selectKeyAriaLabel: "Sélectionner",
                                },
                            },
                        },
                    },
                },
            },
        },

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
        externalLinkIcon: true,
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
            themeConfig: {
                nav: [
                    { text: "Accueil", link: "/fr/" },
                    { text: "À propos", link: "/fr/about" },
                    { text: "Compétences", link: "/fr/skills" },
                ],

                darkModeSwitchTitle: "Mode sombre",
                lightModeSwitchTitle: "Mode clair",
                darkModeSwitchLabel: "Thème",

                outline: {
                    label: "Sur cette page",
                },

                returnToTopLabel: "Revenir en haut",

                footer: {
                    copyright:
                        "Copyright &copy; 2024 - Doneli Dzyanino MANASINTSOA",
                },
                externalLinkIcon: true,
            },
        },
    },
    markdown: {
        image: {
            lazyLoading: true,
        },
    },
    vite: {
        ssr: {
            noExternal: ["vuetify"],
        },
    },
});

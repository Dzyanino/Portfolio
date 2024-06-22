import DefaultTheme from "vitepress/theme-without-fonts";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./additionnal.css";

import { createVuetify } from "vuetify";
const vuetify = createVuetify({ components, directives });

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(vuetify);
    },
};

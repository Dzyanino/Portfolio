---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: Accueil

hero:
  name: "Bonjour,"
  text: "Je suis Doneli Dzyanino"
  tagline: "Développeur Web & Logiciel"
  actions:
    - theme: brand
      text: En savoir plus
      link: /fr/about

  image: "/me.png"
---

## Mes derniers projects { style="margin-top: 72px;" }

<ProjectsFr />

<script setup>
  import ProjectsFr from "../layouts/ProjectsFr.vue";
</script>

---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: Home

hero:
  name: "Hi there,"
  text: "I'm Doneli Dzyanino"
  tagline: "Web & Software developer"
  actions:
    - theme: brand
      text: Know me more
      link: /about
    # - theme: alt
    #   text: Contact
    #   link: /skills

  image: "/me.png"
---

## My latest projects { style="margin-top: 72px;" }

<Projects />

<script setup>
  import Projects from "./layouts/Projects.vue";
</script>

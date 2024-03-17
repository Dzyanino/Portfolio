<template>
  <v-app>

    <v-app-bar scroll-behavior="elevate" class="bg-teal-lighten-2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="hidden-sm-and-up rounded"
          @click.stop="navigation = !navigation"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="d-none d-sm-flex">Dzyanino</v-app-bar-title>
      <template v-slot:append>
        <v-list-item link title="About" :ripple="true" class="rounded d-none d-sm-flex"
          @click="scrollMeTo('about')"></v-list-item>
        <v-list-item link title="Projects" :ripple="true" class="rounded d-none d-sm-flex"
          @click="scrollMeTo('projects')"></v-list-item>
        <v-list-item link title="Contacts" :ripple="true" class="rounded d-none d-sm-flex"
          @click="scrollMeTo('contacts')"></v-list-item>
      </template>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="navigation" class="bg-teal-lighten-2">
      <v-list-item title="Dzyanino" subtitle="Software developer" class="hidden-sm-and-up"></v-list-item>
      <v-divider class="mt-2 hidden-sm-and-up"></v-divider>
      <v-list-item link prepend-icon="mdi-information-variant" title="About" class="py-4"
        @click="scrollMeTo('about')"></v-list-item>
      <v-list-item link prepend-icon="mdi-cogs" title="Projects" class="py-4"
        @click="scrollMeTo('projects')"></v-list-item>
      <v-list-item link prepend-icon="mdi-phone" title="Contacts" class="py-4"
        @click="scrollMeTo('contacts')"></v-list-item>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <Index />
    </v-main>

    <v-footer class="bg-teal-lighten-2">
      <v-container>
        <v-row>

          <!-- First col -->
          <v-col cols="12" md="6">
            <h3>Go back to</h3>
            <v-list-item link title="About" :ripple="false" class="py-3" @click="scrollMeTo('about')"></v-list-item>
            <v-list-item link title="Projects" :ripple="false" class="py-3"
              @click="scrollMeTo('projects')"></v-list-item>
            <v-list-item link title="Contacts" :ripple="false" class="py-3"
              @click="scrollMeTo('contacts')"></v-list-item>
          </v-col>

          <!-- Second col -->
          <v-col cols="12" md="6">
            <h3>Illustrations by</h3>
            <v-list-item link target="_blank" href="https://storyset.com" :ripple="false" class="py-3">#
              Storyset</v-list-item>
          </v-col>
        </v-row>
        <div class="d-flex align-center justify-center text-center mt-16">
          <span>&copy; Copyright <strong>Doneli Dzyanino MANASINTSOA</strong> - {{ new Date().getFullYear() }}</span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Index from './components/Index.vue';

const navigation = ref(false)

const scrollMeTo = (idElement) => {
  const element = document.getElementById(idElement);
  const top = element.offsetTop;

  window.scrollTo(0, top + 50);
}
</script>

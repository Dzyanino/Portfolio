<template>
  <v-app>
    <v-app-bar scroll-behavior="elevate" class="bg-teal-lighten-2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="hidden-sm-and-up rounded"
          @click.stop="navigation = !navigation"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="d-none d-sm-flex">Dzyanino</v-app-bar-title>
      <template v-slot:append>
        <v-list-item class="rounded d-none d-sm-flex">
          <a class="text-white" href="#about">About</a>
        </v-list-item>
        <v-list-item class="rounded d-none d-sm-flex">
          <a class="text-white" href="#projects">Projects</a>
        </v-list-item>
        <v-list-item class="rounded d-none d-sm-flex">
          <a class="text-white" href="#contacts">Contacts</a>
        </v-list-item>
      </template>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="navigation" class="bg-teal-lighten-2">
      <v-list-item title="Dzyanino" subtitle="Software developer" class="hidden-sm-and-up"></v-list-item>
      <v-divider class="mt-2 hidden-sm-and-up"></v-divider>
      <v-list-item link prepend-icon="mdi-information" class="py-4 text-white">
        <a href="#about" class="text-white">About</a>
      </v-list-item>
      <v-list-item link prepend-icon="mdi-cogs" class="py-4 text-white">
        <a href="#projects" class="text-white">Projects</a>
      </v-list-item>
      <v-list-item link prepend-icon="mdi-phone" class="py-4 text-white">
        <a href="#contacts" class="text-white">Contacts</a>
      </v-list-item>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <Index />
    </v-main>

    <v-footer class="bg-teal-lighten-2">
      <v-container>
        <v-row>
          <!-- First col -->
          <v-col cols="12" md="6">
            <h3 class="mb-2">Go back to</h3>
            <v-list-item class="py-3">
              <a class="text-white" href="#about">About</a>
            </v-list-item>
            <v-list-item class="py-3">
              <a class="text-white" href="#projects">Projects</a>
            </v-list-item>
            <v-list-item class="py-3">
              <a class="text-white" href="#contacts">Contacts</a>
            </v-list-item>
          </v-col>

          <!-- Second col -->
          <v-col cols="12" md="6">
            <h3 class="mb-2">Illustrations by</h3>
            <v-list-item class="py-3">
              <a target="_blank" href="https://storyset.com/" class="text-white">
                <v-icon>mdi-link-variant</v-icon>
                Storyset
              </a>
            </v-list-item>
          </v-col>
        </v-row>
        <div class="d-flex align-center justify-center text-center mt-16">
          <span>&copy; Copyright <strong>Doneli Dzyanino MANASINTSOA</strong> -
            {{ new Date().getFullYear() }}</span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import Index from "./components/Index.vue";

const navigation = ref(false);
</script>

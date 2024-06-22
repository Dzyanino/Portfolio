<template>
    <v-container fluid class="pa-0">
        <v-responsive>
            <Intro />
            <MySelf />
            <Projects />
            <Contacts />
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts">
import Intro from './layouts/Intro.vue';
import MySelf from './layouts/MySelf.vue';
import Projects from './layouts/Projects.vue';
import Contacts from './layouts/Contacts.vue';
</script>
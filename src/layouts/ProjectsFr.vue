<script setup lang="ts">
import { ref } from "vue";
import Cards from "../components/Cards.vue";

const projects: Object = ref([
    { title: "Gestion d'emploi du temps", description: "For managing college related scheduling", status: "Non terminé", contribution: false, asset: "/projects/timetable.png", techno: ["Nuxt", "Vue", "Vuetify"] },
    { title: "Application de gestion avec Node.js", description: "Node.js basical management app", status: "Terminé", contribution: false, asset: "", techno: ["Express", "Sequelize", "Vue", "Vuetify"] },
    { title: "Gestion de congé", description: "Web app for employes leaves management", status: "Non terminé", contribution: false, asset: "", techno: ["Laravel", "Vue", "Vuetify"] },
    { title: "Administration des règles IPTables", description: "Desktop app for configuring GNU/Linux firewall's rules, IPTables", status: "Terminé", contribution: true, asset: "/projects/iptables.png", techno: ["Python", "PyQt"] },
    { title: "Gestion de rendez-vous", description: "Desktop app for managing basical rendez-vous", status: "Besoin d'améliorations", contribution: true, asset: "", techno: ["C#"] },
]);
</script>

<template>
    <v-container class="px-0" fluid>
        <v-row>

            <Cards :projects="projects" />

        </v-row>
    </v-container>
</template>
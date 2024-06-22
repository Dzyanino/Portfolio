<script setup lang="ts">
import { ref } from "vue";
import Cards from "../components/Cards.vue";

const projects: Object = ref([
    { title: "Timetable management app", description: "For managing college related scheduling", status: "Unfinished", contribution: false, asset: "/projects/timetable.png", techno: ["Nuxt", "Vue", "Vuetify"] },
    { title: "Node.js management app", description: "Node.js basical management app", status: "Finished", contribution: false, asset: "", techno: ["Express", "Sequelize", "Vue", "Vuetify"] },
    { title: "Leave management app", description: "Web app for employes leaves management", status: "Unfinished", contribution: false, asset: "", techno: ["Laravel", "Vue", "Vuetify"] },
    { title: "IPTables firewall rules", description: "Desktop app for configuring GNU/Linux firewall's rules, IPTables", status: "Finished", contribution: true, asset: "/projects/iptables.png", techno: ["Python", "PyQt"] },
    { title: "Rendez-vous management", description: "Desktop app for managing basical rendez-vous", status: "Needs improvements", contribution: true, asset: "", techno: ["C#"] },
]);
</script>

<template>
    <v-container class="px-0" fluid>
        <v-row>

            <Cards :projects="projects" />

        </v-row>
    </v-container>
</template>
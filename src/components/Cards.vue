<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    projects: {
        type: Object
    }
})
</script>

<template>
    <v-col cols="12" md="6" lg="4" xl="3" v-for="(project, index) in projects" :key="index">
        <v-card flat class="bg-grey-lighten-4 border-md rounded-lg">
            <v-img :src="project.asset" height="200" class="align-end text-white"
                gradient="to bottom, transparent, rgba(0,0,0,.1)" cover>
            </v-img>
            <v-card-title class="font-weight-bold">{{ project.title }}</v-card-title>
            <v-card-subtitle class="">
                <span>{{ project.status }}</span>
            </v-card-subtitle>
            <v-card-text>
                <span>{{ project.description }}</span>

                <div>
                    <span>{{ project.contribution }}</span>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-row no-gutters>
                    <v-col cols="auto" v-for="(tech, num) in project.techno" :key="num">
                        <v-chip class="mx-1" variant="tonal" size="small">{{ tech }}</v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<style>
.border-md {
    transition: 400ms ease-out !important;
}

.border-md:hover {
    border-color: #47caff !important;
}
</style>
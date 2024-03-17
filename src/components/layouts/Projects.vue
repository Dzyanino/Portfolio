<template>
  <!-- Projects -->
  <section id="projects" class="projects-section bg-teal-lighten-2">
    <v-container>
      <h2 class="text-inter-title h-screen d-flex align-center justify-center">
        What can i do ?
      </h2>

      <v-lazy transition="slide-y-reverse-transition" :options="{ threshold: 1 }" :min-height="200">
        <h2 class="text-inter-subtitle text-center text-md-left mt-16 pt-16">
          # My projects
        </h2>
      </v-lazy>

      <v-row class="align-center">
        <v-col cols="12" class="text-center text-md-start">
          <v-carousel cycle hide-delimiter-background color="black" height="auto" :show-arrows="false" delimiter-icon="mdi-square"
            class="align-center flat">
            <v-carousel-item v-for="project in projects" :key="project.number">
              <v-card class="pa-4 pa-md-8">
                <v-card-title class="text-h5 font-weight-bold">{{ project.name }}</v-card-title>
                <v-card-subtitle class="text-body-1">{{ project.description }}</v-card-subtitle>

                <v-card-text class="d-flex flex-column mt-2 text-body-1">

                  <v-row>

                    <v-col cols="12" md="6" class="justify-center justify-md-start align-center">
                      <span>Platform : </span>
                      <span v-for="plate in project.platform">
                        {{ plate }}
                      </span>
                    </v-col>

                    <v-col cols="12" md="6" class="justify-center justify-md-start align-center">
                      <span>Status : </span>
                      <span>{{ project.status }}</span>
                    </v-col>

                  </v-row>

                  <v-row>

                    <v-col cols="12" md="6" class="justify-center justify-md-start align-center">
                      <span>Visibility : </span>
                      <span>{{ project.visibility }}</span>
                    </v-col>

                    <v-col cols="12" md="6" class="justify-center justify-md-start align-center">
                      <span>Link : </span>
                      <span>{{ project.link }}</span>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6" class="d-flex justify-center justify-md-start align-center">
                      <v-chip-group column v-for="lang in project.language">
                        <v-chip lable><v-icon start>mdi-label</v-icon>{{ lang }}</v-chip>
                      </v-chip-group>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex justify-center justify-md-start align-center">
                      <v-chip-group v-for="frame in project.framework">
                        <v-chip lable><v-icon start>mdi-cog</v-icon>{{ frame }}</v-chip>
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions class="justify-end">
                  <span class="d-flex px-3 py-1 rounded bg-pink-lighten-2 align-center"
                    :class="{ 'bg-teal-lighten-2': project.role == 'Made' }">
                    <v-icon v-if="project.role == 'Made'" start>mdi-check</v-icon>
                    <v-icon v-else-if="project.role == 'Contributed to'" start>mdi-toy-brick</v-icon>
                    <span>{{ project.role }}</span>
                  </span>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <svg class="d-block" style="transform: rotate(180deg); transition: 0.3s" viewBox="0 0 1440 150" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <path style="transform: translate(0, 0px); opacity: 1" fill="#4db6ac"
      d="M0,90L20,75C40,60,80,30,120,15C160,0,200,0,240,22.5C280,45,320,90,360,95C400,100,440,65,480,52.5C520,40,560,50,600,57.5C640,65,680,70,720,70C760,70,800,65,840,62.5C880,60,920,60,960,72.5C1000,85,1040,110,1080,100C1120,90,1160,45,1200,27.5C1240,10,1280,20,1320,27.5C1360,35,1400,40,1440,42.5C1480,45,1520,45,1560,50C1600,55,1640,65,1680,75C1720,85,1760,95,1800,92.5C1840,90,1880,75,1920,80C1960,85,2000,110,2040,107.5C2080,105,2120,75,2160,57.5C2200,40,2240,35,2280,37.5C2320,40,2360,50,2400,45C2440,40,2480,20,2520,20C2560,20,2600,40,2640,55C2680,70,2720,80,2760,80C2800,80,2840,70,2860,65L2880,60L2880,150L2860,150C2840,150,2800,150,2760,150C2720,150,2680,150,2640,150C2600,150,2560,150,2520,150C2480,150,2440,150,2400,150C2360,150,2320,150,2280,150C2240,150,2200,150,2160,150C2120,150,2080,150,2040,150C2000,150,1960,150,1920,150C1880,150,1840,150,1800,150C1760,150,1720,150,1680,150C1640,150,1600,150,1560,150C1520,150,1480,150,1440,150C1400,150,1360,150,1320,150C1280,150,1240,150,1200,150C1160,150,1120,150,1080,150C1040,150,1000,150,960,150C920,150,880,150,840,150C800,150,760,150,720,150C680,150,640,150,600,150C560,150,520,150,480,150C440,150,400,150,360,150C320,150,280,150,240,150C200,150,160,150,120,150C80,150,40,150,20,150L0,150Z">
    </path>
  </svg>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    number: 1,
    name: "Leave management application",
    description:
      "A Web application for managing employees leaves. Written in PHP and Javascript",
    role: "Made",
    platform: ["Web"],
    language: ["Javascript", "PHP"],
    framework: ["Laravel", "Vue", "Vuetify"],
    visibility: "Private",
    link: "",
    status: "Minor bugs",
  },
  {
    number: 2,
    name: "IPTable",
    description:
      "A GNU/Linux firewall management application. Written in Python and PyQt",
    role: "Contributed to",
    platform: ["GNU/Linux"],
    language: ["Python"],
    framework: ["PyQt"],
    visibility: "Public soon",
    link: "",
    status: "Missing features",
  },
  {
    number: 3,
    name: "Leave management application",
    description:
      "A Desktop application for managing employees leaves. Written in Java",
    role: "Made",
    platform: ["Web"],
    language: ["Java"],
    framework: [],
    visibility: "Private",
    link: "",
    status: "Missing features",
  },
  {
    number: 4,
    name: "Rendez-vous management application",
    description:
      "A Desktop application for managing rendez-vous. Written in C#",
    role: "Contributed to",
    platform: ["Windows"],
    language: ["C#"],
    framework: [],
    visibility: "Private",
    link: "",
    status: "Finished",
  },
  {
    number: 5,
    name: "Fund management application",
    description:
      "A Web application for managing institution's funds. Written in PHP and Javascript",
    role: "Made",
    platform: ["Web"],
    language: ["Javascript", "PHP"],
    framework: [],
    visibility: "Private",
    link: "",
    status: "Finished",
  },
]);
</script>

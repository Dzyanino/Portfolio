<template>

    <!-- Myself -->
    <section id="about" class="about-section bg-grey-lighten-4">
        <v-container>

            <!-- Just me -->
            <h2 class="text-inter-title h-screen d-flex align-center justify-center">Who am I ?</h2>
            <v-lazy transition="slide-y-reverse-transition" :options="{ 'threshold': 1 }" :min-height="280">
                <v-row class="align-center">

                    <!-- First col -->
                    <v-col cols="12" md="6" class="text-center text-md-start">
                        <div>
                            <v-img aspect-ratio="1" src="@/assets/images/teamwork.png"></v-img>
                        </div>
                    </v-col>

                    <!-- Second col -->
                    <v-col cols="12" md="6" class="text-center text-md-start">
                        <h2 class="text-ot-title">
                            Doneli Dzyanino MANASINTSOA
                        </h2>
                        <span class="text-ot-description text-uppercase">
                            <span>Web and Desktop developer</span>
                        </span>
                        <span class="text-ot-description">
                            I'm blablabla Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Quam, officiis non quo temporibus id
                            reiciendis illo fugit alias sequi ipsum! Doloribus fugit
                            sapiente molestiae quaerat ullam sit odit nesciunt eos?
                        </span>
                    </v-col>
                </v-row>
            </v-lazy>

            <!-- My skills -->
            <v-lazy transition="fade-transition" :options="{ 'threshold': 1 }" :min-height="50">
                <h2 class="text-inter-subtitle text-center text-md-left mt-16 pt-16 mb-16"># My skills</h2>
            </v-lazy>
            <v-lazy transition="slide-y-reverse-transition" :options="{ 'threshold': 1 }" :min-height="280">
                <v-row class="align-start mb-16">

                    <!-- Desktop -->
                    <v-col cols="12" md="6" class="mb-16 mb-md-0">
                        <v-expansion-panels v-model="panel_1">

                            <v-expansion-panel v-for="desktop in desktops" :key="desktop.name">
                                <v-expansion-panel-title class="text-h6">{{ desktop.name }}</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-list-item v-for="frame in desktop.frameworks" :key="frame.name">
                                        <v-row class="align-center">
                                            <v-col cols="4"><span>{{ frame.name }}</span></v-col>
                                            <v-col cols="8">
                                                <v-progress-linear class="text-pink-lighten-2 bg-grey-lighten-3" rounded
                                                    :model-value="frame.value"></v-progress-linear>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>

                                    <v-divider class="my-4"></v-divider>

                                    <v-list-item>
                                        <v-row class="align-center">
                                            <v-col cols="4" class="text-button font-weight-bold">Vanilla</v-col>
                                            <v-col cols="8">
                                                <v-progress-linear class="text-pink-lighten-1 bg-grey-lighten-3" rounded
                                                    :model-value="desktop.vanilla" :height="10"></v-progress-linear>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                        </v-expansion-panels>
                    </v-col>


                    <v-divider class="d-flex d-md-none"></v-divider>


                    <!-- Web -->
                    <v-col cols="12" md="6" class="mt-16 mt-md-0">
                        <v-expansion-panels v-model="panel_2">

                            <v-expansion-panel v-for="web in webs" :key="web.name">
                                <v-expansion-panel-title class="text-h6">{{ web.name }}</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-list-item v-for="frame in web.frameworks" :key="frame.name">
                                        <v-row class="align-center">
                                            <v-col cols="4"><span>{{ frame.name }}</span></v-col>
                                            <v-col cols="8">
                                                <v-progress-linear class="text-pink-lighten-2 bg-grey-lighten-3" rounded
                                                    :model-value="frame.value"></v-progress-linear>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>

                                    <v-divider class="my-4"></v-divider>

                                    <v-list-item>
                                        <v-row class="align-center">
                                            <v-col cols="4" class="text-button font-weight-bold">Vanilla</v-col>
                                            <v-col cols="8">
                                                <v-progress-linear class="text-pink-lighten-1 bg-grey-lighten-3" rounded
                                                    :model-value="web.vanilla" :height="10"></v-progress-linear>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-lazy>
        </v-container>
    </section>

    <svg class="d-block bg-teal-lighten-2" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 150"
        version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path style="transform:translate(0, 0px); opacity:1" fill="#f5f5f5"
            d="M0,90L20,75C40,60,80,30,120,37.5C160,45,200,90,240,112.5C280,135,320,135,360,122.5C400,110,440,85,480,70C520,55,560,50,600,62.5C640,75,680,105,720,105C760,105,800,75,840,60C880,45,920,45,960,45C1000,45,1040,45,1080,42.5C1120,40,1160,35,1200,35C1240,35,1280,40,1320,52.5C1360,65,1400,85,1440,87.5C1480,90,1520,75,1560,70C1600,65,1640,70,1680,72.5C1720,75,1760,75,1800,77.5C1840,80,1880,85,1920,77.5C1960,70,2000,50,2040,55C2080,60,2120,90,2160,87.5C2200,85,2240,50,2280,32.5C2320,15,2360,15,2400,25C2440,35,2480,55,2520,55C2560,55,2600,35,2640,32.5C2680,30,2720,45,2760,45C2800,45,2840,30,2860,22.5L2880,15L2880,150L2860,150C2840,150,2800,150,2760,150C2720,150,2680,150,2640,150C2600,150,2560,150,2520,150C2480,150,2440,150,2400,150C2360,150,2320,150,2280,150C2240,150,2200,150,2160,150C2120,150,2080,150,2040,150C2000,150,1960,150,1920,150C1880,150,1840,150,1800,150C1760,150,1720,150,1680,150C1640,150,1600,150,1560,150C1520,150,1480,150,1440,150C1400,150,1360,150,1320,150C1280,150,1240,150,1200,150C1160,150,1120,150,1080,150C1040,150,1000,150,960,150C920,150,880,150,840,150C800,150,760,150,720,150C680,150,640,150,600,150C560,150,520,150,480,150C440,150,400,150,360,150C320,150,280,150,240,150C200,150,160,150,120,150C80,150,40,150,20,150L0,150Z">
        </path>
    </svg>
</template>

<script setup>
import { ref } from 'vue';

const desktops = ref([
    {
        'name': 'Python',
        'vanilla': 55,
        'frameworks': [
            {
                'name': 'PyQt',
                'value': 45
            }
        ]
    },
    {
        'name': 'Java',
        'vanilla': 65,
        'frameworks': [
            {
                'name': 'Spring Boot',
                'value': 45
            },
            {
                'name': 'JSP',
                'value': 55
            }
        ]
    },
    {
        'name': 'C#',
        'vanilla': 60,
        'frameworks': []
    }
])

const webs = ref([
    {
        'name': 'Javascript',
        'vanilla': 80,
        'frameworks': [
            {
                'name': 'Vuetify',
                'value': 85
            },
            {
                'name': 'Vue',
                'value': 80
            },
            {
                'name': 'Express',
                'value': 45
            }
        ]
    },
    {
        'name': 'PHP',
        'vanilla': 75,
        'frameworks': [
            {
                'name': 'Laravel',
                'value': 80
            }
        ]
    },
    {
        'name': 'CSS',
        'vanilla': 85,
        'frameworks': [
            {
                'name': 'TailwindCSS',
                'value': 55
            },
            {
                'name': 'Bootstrap',
                'value': 60
            }
        ]
    },
    {
        'name': 'HTML',
        'vanilla': 90,
        'frameworks': []
    }
])

const panel_1 = ref(1)
const panel_2 = ref(2)

</script>
<template>

    <!-- Contacts -->
    <section id="contacts" class="contacts-section bg-grey-lighten-4">
        <v-container>
            <h2 class="text-inter-title h-screen d-flex align-center justify-center">Reach me ?</h2>
            <v-lazy transition="slide-y-reverse-transition" :options="{ 'threshold': 1 }" :min-height="280">
                <v-row class="align-center">

                    <!-- First col -->
                    <v-col cols="12" md="6" class="text-center text-md-start">
                        <h2 class="text-ot-title">
                            Just contact me
                        </h2>
                        <span class="text-ot-description">
                            You can send an e-mail or directly message me
                        </span>
                        <div class="d-flex flex-column flex-sm-row justify-center justify-sm-space-evenly justify-md-space-between">
                            <v-btn color="#385963" prepend-icon="mdi-github" class="my-2 my-sm-0">Github</v-btn>
                            <v-btn color="#385963" prepend-icon="mdi-gmail" class="my-2 my-sm-0">Gmail</v-btn>
                            <v-btn color="#385963" prepend-icon="mdi-facebook" class="my-2 my-sm-0">Facebook</v-btn>
                        </div>
                    </v-col>

                    <!-- Second col -->
                    <v-col cols="12" md="6" class="text-center text-md-start">
                        <div>
                            <v-img aspect-ratio="1" src="@/assets/images/contacts.png"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-lazy>
        </v-container>
    </section>

    <svg class="d-block bg-teal-lighten-2" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 150" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <path style="transform:translate(0, 0px); opacity:1" fill="#f5f5f5"
            d="M0,105L20,110C40,115,80,125,120,112.5C160,100,200,65,240,55C280,45,320,60,360,55C400,50,440,25,480,15C520,5,560,10,600,10C640,10,680,5,720,25C760,45,800,90,840,97.5C880,105,920,75,960,57.5C1000,40,1040,35,1080,50C1120,65,1160,100,1200,105C1240,110,1280,85,1320,75C1360,65,1400,70,1440,77.5C1480,85,1520,95,1560,82.5C1600,70,1640,35,1680,30C1720,25,1760,50,1800,65C1840,80,1880,85,1920,75C1960,65,2000,40,2040,25C2080,10,2120,5,2160,2.5C2200,0,2240,0,2280,17.5C2320,35,2360,70,2400,92.5C2440,115,2480,125,2520,120C2560,115,2600,95,2640,87.5C2680,80,2720,85,2760,77.5C2800,70,2840,50,2860,40L2880,30L2880,150L2860,150C2840,150,2800,150,2760,150C2720,150,2680,150,2640,150C2600,150,2560,150,2520,150C2480,150,2440,150,2400,150C2360,150,2320,150,2280,150C2240,150,2200,150,2160,150C2120,150,2080,150,2040,150C2000,150,1960,150,1920,150C1880,150,1840,150,1800,150C1760,150,1720,150,1680,150C1640,150,1600,150,1560,150C1520,150,1480,150,1440,150C1400,150,1360,150,1320,150C1280,150,1240,150,1200,150C1160,150,1120,150,1080,150C1040,150,1000,150,960,150C920,150,880,150,840,150C800,150,760,150,720,150C680,150,640,150,600,150C560,150,520,150,480,150C440,150,400,150,360,150C320,150,280,150,240,150C200,150,160,150,120,150C80,150,40,150,20,150L0,150Z">
        </path>
    </svg>
</template>

<script setup></script>
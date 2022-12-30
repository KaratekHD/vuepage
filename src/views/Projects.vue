<template>

  <v-container>
    <div class="text-h5">Social</div>

    <v-row>
      <v-col cols="12" md="4">
        <project-card title="OpenGM" description="Opensoure Telegram Group Manager written in Python."
                      link="https://opengm.karatek.net" source="https://github.com/KaratekHD/Nemesis">
          <v-img
            src="@/assets/projects/opengm.png"
            :aspect-ratio="16/9"
            cover
          ></v-img>
        </project-card>
      </v-col>

    </v-row>
    <br>

    <div class="text-h5">Third-Party</div>
    <v-row>
      <v-col cols="12" md="4">
        <project-card title="openSUSE Package Installer"
                      description="Search and install almost all packages available for openSUSE and SLE."
                      link="https://software.opensuse.org/package/opi" source="https://github.com/openSUSE/opi">
          <v-img
            src="https://raw.githubusercontent.com/openSUSE/opi/master/demo.gif"
            :aspect-ratio="16/9"
            cover
          ></v-img>
        </project-card>
      </v-col>
      <v-col cols="12" md="4">
        <project-card title="Corona Warn  Companion"
                      description="Android App Which Shows Details about CWA Exposures (Requires Root or CCTG or RaMBLE Apps) "
                      source="https://github.com/mh-/corona-warn-companion-android">
          <v-img
            src="@/assets/projects/cwa.png"
            :aspect-ratio="16/9"
            cover
          ></v-img>
        </project-card>
      </v-col>

    </v-row>
    <br>
    <div class="text-h5">Misc</div>
    <v-row>
      <v-col cols="12" md="4">
        <project-card title="KJeopardy"
                      description="Opensource jeopardy application written in Python with KDE Frameworks 5."
                      source="https://github.com/KaratekHD/kjeopardy">
          <v-img
            src="https://raw.githubusercontent.com/KaratekHD/kjeopardy/main/screenshots/grid.png"
            :aspect-ratio="16/9"
            cover
          ></v-img>
        </project-card>
      </v-col>
      <v-col cols="12" md="4">
        <project-card title="Kircle" description="Kleines Programm, um mit Kreisen zu rechnen."
                      source="https://github.com/KaratekHD/Kircle">
          <v-img
            src="@/assets/projects/kircle.png"
            :aspect-ratio="16/9"
            cover
          ></v-img>
        </project-card>
      </v-col>

    </v-row>
    <br>

  </v-container>
</template>
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
</script>
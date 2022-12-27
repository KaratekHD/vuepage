<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')"/>
    <v-app-bar-title>
      KaratekHD
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon @click="toggleTheme()">
        <v-icon icon="mdi-brightness-6" />
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import {useTheme} from "vuetify";

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

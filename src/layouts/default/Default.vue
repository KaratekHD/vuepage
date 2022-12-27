<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list-item title="KaratekHD" subtitle="Student from Germany"/>
      <v-divider/>


      <v-list
        dense
        nav
      >
        <v-list-item rounded to="/" color="primary" title="Home">
          <template v-slot:prepend>
            <v-icon icon="mdi-home"/>
          </template>
        </v-list-item>
        <v-list-item to="/about" color="primary" title="About me">
          <template v-slot:prepend>
            <v-icon icon="mdi-information"/>
          </template>
        </v-list-item>
        <v-list-item to="/projects" color="primary" title="Projects">
          <template v-slot:prepend>
            <v-icon icon="mdi-view-dashboard"/>
          </template>
        </v-list-item>
        <v-list-item href="//blog.karatek.net" color="primary" title="Blog">
          <template v-slot:prepend>
            <v-icon icon="mdi-newspaper"/>
          </template>
        </v-list-item>
        <v-list-item to="/contact" color="primary" title="Contact and Legal stuff">
          <template v-slot:prepend>
            <v-icon icon="mdi-message"/>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <default-bar @toggleDrawer="toggleDrawer()"/>

    <default-view/>


  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import {ref} from "vue";

let drawer = ref(false)

function toggleDrawer() {
  drawer.value = !drawer.value
}
</script>

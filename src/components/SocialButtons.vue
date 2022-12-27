<template>
  <v-row class="d-flex justify-center">
    <v-btn
      class="social-button"
      icon="mdi-reddit"
      color="red"
      size="large"
      href="https://reddit.com/u/KaratekHD"
    ></v-btn
    >
    <v-btn
      icon
      color="#0D47A1"
      size="large"
      class="social-button"
      href="https://mastodon.social/@KaratekHD"
    >
      <v-icon color="white" icon="mdi-mastodon"></v-icon>
    </v-btn>
    <v-btn
      class="social-button"
      icon="mdi-github"
      color="black"
      size="large"
      href="https://github.com/KaratekHD"
    ></v-btn
    >
    <v-btn
      icon
      class="social-button"
      color="#73BA25"
      size="large"
      href="https://en.opensuse.org/User:KaratekHD"
    >
      <Icon color="white" height="24" :icon="opensuseIcon"/>
    </v-btn

    >
    <v-btn
      icon
      class="social-button"
      color="orange"
      size="large"
      href="mailto:kontakt@karatek.net"
    >
      <v-icon color="white" icon="mdi-email"></v-icon>
    </v-btn

    >
    <v-btn
      icon
      class="social-button"
      color="#05A63F"
      size="large"
      href="https://threema.id/FEBFEXDY"
    >
      <Icon color="white" height="24" :icon="threemaIcon"/>
    </v-btn

    >
    <v-btn
      icon
      class="social-button"
      color="black"
      size="large"
      href="https://matrix.to/#/@KaratekHD:opensuse.org"
    >
      <Icon height="24" :icon="matrixIcon"/>
    </v-btn

    >

    <v-btn
      icon
      class="social-button"
      color="blue"
      size="large"
      href="https://t.me/Karatek_HD"
    >
      <Icon height="24" :icon="baselineTelegram"/>
    </v-btn

    >

  </v-row>
</template>

<script setup>
import {Icon} from '@iconify/vue';
import baselineTelegram from '@iconify-icons/ic/baseline-telegram';
import matrixIcon from '@iconify-icons/cib/matrix';
import threemaIcon from '@iconify-icons/simple-icons/threema';
import opensuseIcon from '@iconify-icons/simple-icons/opensuse';
</script>

<style scoped>

.social-button {
  margin-right: 5px;
}

</style>
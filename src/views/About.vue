<template>
  <v-container>
    <h1 class="text-h2">About me</h1>
    <p>I'm a {{ get_age() }} old student from Germany, and I like to experiment with Linux and free software in
      general.<br>
      I know my way around in Python, Java and JavaScript, but I am constantly trying to learn new things!
    </p>
    <br>

    <h2 class="text-h5">Contributions to open source projects</h2>
    <v-card>
      <div class="github">
        <v-container max-width="50%">
          <v-col class="d-flex justify-center pa-2">
            <v-row class="d-flex justify-center pa-2">
              <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </v-col>
          <v-col class="d-flex justify-center pa-2">
            <v-row class="d-flex justify-center pa-2">
              <span class="text-body-1">Loading the Contribution Graph...</span>
            </v-row>
          </v-col>
        </v-container>
      </div>
    </v-card>
    <v-container>
      <ul>
        <li>added <a
          href="https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/package-management/DNF/">DNF</a>
          support to the <a href="https://github.com/openSUSE/opi">openSUSE Package Installer (opi)</a></li>
        <li>Maintains and runs the <a href="https://github.com/KaratekHD/Nemesis/">Telegram Group Management Bot</a> for
          the openSUSE Telegram Groups
        </li>
        <li>Moderates the openSUSE <a href="https://reddit.com/r/openSUSE">Subreddit</a>, <a
          href="https://t.me/opensuse">Telegram
          group</a> and <a href="https://discord.gg/opensuse">Discord Server</a></li>
      </ul>
    </v-container>

    <br>
    <h2 class="text-h5">Hobbies</h2>
    In my spare time, I like to to all sorts of different things.
    I do Karate and canoeing, and obviously I code.
    In addition I am also very active at my local church, doing youth work and all sorts of other things to make a
    difference in church - so that is doesn't keep it's old and boring look.
    I also love music: I play the piano and am currently learning to play the organ.
    <br>

  </v-container>
</template>

<script setup>

import {onMounted} from "vue";
import GitHubCalendar from "github-calendar";

function get_age() {
  const formatter = new Intl.RelativeTimeFormat('en')
  const birthday = new Date("2005-08-01")
  const diff = Date.now() - birthday
  return formatter.format(Math.trunc(diff / (1000 * 60 * 60 * 24 * 365)), "years")
}

onMounted(() => {
  GitHubCalendar(".github", "KaratekHD", {responsive: true});

})
</script>

<style>
@import 'github-calendar/dist/github-calendar-responsive.css';
</style>
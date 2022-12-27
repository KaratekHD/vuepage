<template>
  <v-footer class="d-flex justify-center" color="background">
    <v-container>
      <social-buttons/>
      <v-row class="d-flex justify-center copyright">
        Copyright &copy; {{ new Date().getFullYear() }} KaratekHD.

      </v-row>
    </v-container>

  </v-footer>
</template>

<script setup>
import SocialButtons from "@/components/SocialButtons.vue";

</script>

<style scoped>
.copyright {
  margin-top: 2rem;
}
</style>
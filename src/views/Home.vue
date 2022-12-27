<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="@/assets/logo.svg"
      />


      <h1 class="text-h2 font-weight-bold">Hi there!</h1>
      <p>I'm Jens, a student from Germany. Glad you found your way to my homepage!</p>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            to="/projects"
            min-width="164"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Projects
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            to="about"
            min-width="228"
            size="x-large"
            variant="flat"
          >
            <v-icon
              icon="mdi-information"
              size="large"
              start
            />

            About me
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://blog.karatek.net/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-newspaper"
              size="large"
              start
            />

            Blog
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
</script>

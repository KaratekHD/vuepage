<template>
  <v-card>
    <slot></slot>
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ description }}

    </v-card-subtitle>
    <v-card-actions>
<v-spacer></v-spacer>
      <v-btn
        v-if="link"
        color="primary"
        variant="text"
        :href="link"
      >
        Check it out!

      </v-btn
      >
      <v-btn
        v-if="source"
        color="primary"
        variant="text"
        :href="source"
      >
        Source
      </v-btn
      >

    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps(['title', 'description', 'link', 'source'])
</script>
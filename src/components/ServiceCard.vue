<template>
    <v-card :href="link">
        <slot />
        <v-card-title>{{ title }} </v-card-title>
        <v-card-text>
            {{ description }}<br>
            <div class="service-info">
                <v-divider class="mx-4" style="margin-bottom: 1rem"/>
                <v-chip v-if="requiresAuth" class="ma-2" variant="outlined" color="primary"><v-icon start icon="mdi-account"></v-icon>Account required</v-chip>
                <v-chip v-if="inviteOnly" class="ma-2" variant="outlined" color="pink"><v-icon start icon="mdi-key"></v-icon>Invite only</v-chip>
                <v-chip v-else class="ma-2" variant="outlined" color="success"><v-icon start icon="mdi-earth"></v-icon>Free to use</v-chip>

            </div>
        </v-card-text>
        
        
    </v-card>
</template>

<script setup>
const props = defineProps(['title', 'description', 'requires-auth', 'invite-only', 'link'])
</script>

<style>
.service-info {
    margin-top: 1rem;
}
</style>
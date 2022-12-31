<template>
    <v-container>
        <div class="text-h5">Education</div>
        <v-row>
            <v-col cols="12" md="4">
                <service-card link="https://edu.karatek.net" title="Karatek School Cloud" description="Collection of tools for use in education, easy to use, open source and privacy respecting." invite-only="true" requires-auth="true" >
                    <v-img
                        src="@/assets/services/edu.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
            <v-col cols="12" md="4">
                <service-card link="https://md.karatek.net" title="Hedgedoc" description="Collaborate on Markdown notes in real time. Supports inline LaTeX Code, Tables, Images and much more. Usable for Quick Notes, Presentations etc." invite-only="true" requires-auth="true" >
                    <v-img
                        src="@/assets/services/md.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
            <v-col cols="12" md="4">
                <service-card link="https://edu.karatek.net/write/auth" title="Write" description="Collaborate on hand written notes in real time using the Styluslabs Write application. Avaliable for Linux, Windows, Android and IOS." invite-only="true" requires-auth="true" >
                    <v-img
                        src="@/assets/services/write.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
        </v-row>
        <br>
        <div class="text-h5">Social</div>
        <v-row>
            <v-col cols="12" md="4">
                <service-card link="https://opengm.karatek.net" title="OpenGM" description="Opensoure Telegram Group Manager written in Python.">
                    <v-img
                        src="@/assets/projects/opengm.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
            <v-col cols="12" md="4">
                <service-card link="https://chat.karatek.net" title="Matrix" description="Federated and end-to-end encrypted instant messenger." invite-only="true" requires-auth="true" >
                    <v-img
                        src="@/assets/services/matrix.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
        </v-row>
        <br>
        <div class="text-h5"> Miscellaneous</div>
        <v-row>
            <v-col cols="12" md="4">
                <service-card link="https://cloud.karatek.net" title="Nextcloud" description="File storage, calendar sync and much more." requires-auth="true" invite-only="true">
                    <v-img
                        src="@/assets/services/cloud.png"
                        :aspect-ratio="16/9"
                        cover />
                </service-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
</script>
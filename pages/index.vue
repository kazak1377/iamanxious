<script setup lang="ts">
definePageMeta({
    layout: "landing",
});

const { $client } = useNuxtApp();
const resp = await $client.hello.query({ text: "Max" });
const worries = await $client.worries.query();
</script>

<template>
    <div>
        <h1>Home</h1>
        <p>{{ resp.greeting }}</p>
        <ul>
            <li v-for="worry in worries">{{ worry.worry_text }}</li>
        </ul>
    </div>
</template>

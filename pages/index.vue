<script setup lang="ts">
definePageMeta({
    layout: "landing",
});

const { $client } = useNuxtApp();
const resp = await $client.hello.query({ text: "Max" });
</script>

<template>
    <div>
        <h1>Home</h1>
        <p>{{ resp.greeting }}</p>
    </div>
</template>

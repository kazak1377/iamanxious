<template>
    <section class="mt-16 max-w-screen-md mx-auto">
        <PageTitle>Recent worries</PageTitle>
        <progress-loader v-if="loading" />
        <div class="flex flex-col gap-3 w-full mt-14">
            <worry v-for="worry in worries" :key="worry.id" :worry="worry" />
        </div>
        <div></div>
    </section>
</template>

<script lang="ts" setup>
import type { WorriesRecord } from "~/server/db/xata";

const { $client } = useNuxtApp();
const loading = ref(false);
const worries = ref<WorriesRecord[]>([]);

onMounted(async () => {
    loading.value = true;
    const resp = await $client.worries.latest.query();

    worries.value = resp.worries as any as WorriesRecord[];
    loading.value = false;
});
</script>

<style></style>

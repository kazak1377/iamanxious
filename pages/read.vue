<template>
    <section class="w-full pt-7">
        <gradient-text class="text-3xl font-semibold lg:text-5xl p-0 mb-7">
            Recent worries
        </gradient-text>
        <progress-loader v-if="loading" />
        <div
            class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 w-full mt-3"
        >
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

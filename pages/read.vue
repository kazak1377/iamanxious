<template>
    <div>
        <PageTitle>Recent worries</PageTitle>
        <div class="flex flex-col gap-3 w-full">
            <worry v-for="worry in worries" :key="worry.id" :worry="worry" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { WorriesRecord } from "~/server/db/xata";

const { $client } = useNuxtApp();
const worries = ref<WorriesRecord[]>([]);

onMounted(async () => {
    const resp = await $client.worries.latest.query();
    worries.value = resp.worries as any as WorriesRecord[];
});
</script>

<style></style>

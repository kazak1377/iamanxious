<template>
    <div class="border border-fuchsia-500 text-white/50 rounded-lg p-5">
        <p class="text-xl">{{ props.worry.worry_text }}</p>
        <div class="flex justify-end items-center">
            <span class="text-sm text-white/20">{{ createdAt }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { WorriesRecord } from "~/server/db/xata";

const createdAt = computed(() =>
    new Date(props.worry.xata.createdAt).toLocaleString(),
);

const props = defineProps<{
    worry: WorriesRecord;
}>();
</script>

<style></style>

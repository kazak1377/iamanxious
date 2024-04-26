<template>
    <div
        class="absolute bg-fuchsia-600/25 animate-pulse rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
        :style="{
            left: `${x}px`,
            top: `${y}px`,
            width: '300px',
            height: '300px',
        }"
    ></div>
</template>

<script lang="ts" setup>
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<style></style>

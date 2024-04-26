<script setup lang="ts">
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
</script>

<template>
    <div
        class="flex relative items-center justify-center content-center bg-gradient-to-tr from-[#100c1a] to-[#150c1a] overflow-hidden"
    >
        <div
            class="absolute bg-purple-500/25 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
            :style="{
                left: `${x}px`,
                top: `${y}px`,
                width: '300px',
                height: '300px',
            }"
        ></div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const resp = await $client.worries.singleLatest.query();
</script>

<template>
    <div class="mt-10 flex flex-col gap-10">
        <section>
            <div class="flex flex-col xl:flex-row gap-10">
                <home-title />
                <home-share />
                <div class="flex flex-col w-full min-h-[100%]" v-if="false">
                    <glass-card>
                        {{ resp.lastWorry?.worry_text }}
                    </glass-card>
                </div>
            </div>
        </section>
        <section>
            <home-how />
        </section>
        <section class="mt-10">
            <gradient-text class="w-full text-center text-3xl font-semibold">
                Let’s navigate the
                <span class="italic">complexities of life</span> together,
                anonymously!
            </gradient-text>
        </section>
    </div>
</template>

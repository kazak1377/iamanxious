<script setup lang="ts">
const { $client } = useNuxtApp();

const resp = await $client.worries.singleLatest.query();
</script>

<template>
    <div class="mt-10 flex flex-col gap-10">
        <section>
            <div class="flex flex-col xl:flex-row gap-10">
                <home-title />

                <div class="flex flex-col w-full min-h-[100%] gap-4">
                    <glass-card class="text-white/80 p-3">
                        <gradient-text class="text-xl font-semibold">
                            Last person was worried about:
                        </gradient-text>
                        <p class="px-4 text-white/80 font-light text-lg">
                            {{ resp.lastWorry?.worry_text }}
                        </p>
                        <p class="text-right w-full text-white/30 px-4">
                            {{
                                new Date(
                                    resp.lastWorry?.xata.createdAt,
                                ).toLocaleString()
                            }}
                        </p>
                    </glass-card>
                    <home-share />
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

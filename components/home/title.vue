<template>
    <glass-card class="p-3 md:p-10 pb-10">
        <div class="flex flex-col justify-between h-full xl:pt-10">
            <GradientText>
                <h1 class="text-3xl md:text-6xl">
                    <p class="font-semibold">“I am Anxious” –</p>
                    <p class="font-thin">You're Not Alone</p>
                </h1>
            </GradientText>

            <p class="text-xl md:text-2xl font-light p-4 text-gray-400">
                A private heaven where you can unburden your anxieties
                <span class="italic">anonymously</span>
                and <span class="italic">safely</span>.
            </p>
            <div class="flex flex-row md:gap-10 flex-wrap px-4 gap-5 mt-5">
                <nuxt-link
                    to="/about"
                    class="flex flex-row gap-5 text-white font-semibold items-center justify-start"
                >
                    <img src="/info-icon.svg" alt="" />
                    About
                </nuxt-link>
                <nuxt-link
                    to="/read"
                    class="flex flex-row gap-5 text-white font-semibold items-center justify-start"
                >
                    <img src="/chat-icon.svg" alt="" />
                    Read others' worries
                </nuxt-link>
            </div>
        </div>
    </glass-card>
</template>

<script lang="ts" setup></script>

<style></style>

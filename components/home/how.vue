<template>
    <glass-card>
        <GradientText class="text-4xl font-semibold">
            How it Works
        </GradientText>

        <p class="text-lg md:text-xl font-light px-4 text-gray-400">
            Everyone has moments of doubt and anxiety, but no one should have to
            face them alone. <br class="md:hidden" />

            "I am Anxious" provides a space where you can share your fears and
            worries without revealing your identity.
        </p>
        <div class="flex flex-col lg:flex-row gap-5 w-full px-4 mt-5">
            <home-how-card>
                <img src="/worry-icon.svg" alt="" />
                Share your worries
            </home-how-card>
            <home-how-card>
                <img src="/chat-icon.svg" alt="" />
                Read others' worries
            </home-how-card>
            <home-how-card>
                <img src="/happy-icon.svg" alt="" />
                Feel better
            </home-how-card>
        </div>
    </glass-card>
</template>

<script lang="ts" setup></script>

<style></style>

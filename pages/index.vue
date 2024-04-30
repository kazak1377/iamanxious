<script setup lang="ts"></script>

<template>
    <div class="mt-40 flex flex-col gap-10">
        <section>
            <div class="flex flex-col xl:flex-row gap-10">
                <home-title />
                <home-share />
            </div>
        </section>
        <section>
            <home-how />
        </section>
        <section class="mt-10 mb-20">
            <gradient-text class="w-full text-center text-3xl font-semibold">
                Let’s navigate the <span class="italic">complexities</span> of
                <span class="italic">life</span> together, anonymously!
            </gradient-text>
        </section>
    </div>
</template>

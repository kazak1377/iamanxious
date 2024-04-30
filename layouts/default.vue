<script setup lang="ts"></script>

<template>
    <div class="relative min-h-svh bg overflow-hidden">
        <cursor-glow class="z-10" />
        <div>
            <nav
                class="z-20 fixed top-0 bg-white/10 border border-t-0 border-white/20 w-full flex gap-7 px-10 py-5 backdrop-blur-xl drop-shadow-2xl shadow-2xl rounded-b-2xl"
            >
                <nuxt-link to="/" class="text-white font-semibold text-xl">
                    I am Anxious
                </nuxt-link>
                <div class="flex-1"></div>
                <nuxt-link to="/share" class="text-white">Share</nuxt-link>
                <nuxt-link to="/read" class="text-white">Read</nuxt-link>
            </nav>
            <div class="z-20 pb-32 px-5">
                <slot></slot>
            </div>

            <footer
                class="z-20 w-full text-white/80 rounded-t-2xl absolute bottom-0 bg-white/10 backdrop-blur-xl border border-white/20 border-b-0 drop-shadow-2xl shadow-2xl p-5 flex flex-col gap-5"
            >
                <div class="flex flex-row" v-if="false">
                    <div class="flex flex-col gap-2">
                        <span>Want to develop something special?</span>
                        <a href="mailto:max@kozachenko.io" class="text-white">
                            max@kozachenko.io
                        </a>
                    </div>
                </div>
                <div class="flex flex-col text-center">
                    <p>&copy; {{ new Date().getFullYear() }} I Am Anxious</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
.bg {
    background-image: url("/bg2.jpg");
    background-size: cover;
    background-position: center;
}
</style>

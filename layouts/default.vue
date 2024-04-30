<script setup lang="ts"></script>

<template>
    <div
        class="relative min-h-svh bg-gradient-to-tr from-[#100c1a] to-[#150c1a] overflow-hidden"
    >
        <cursor-glow />
        <div>
            <nav
                class="fixed top-0 bg-white/10 w-full flex gap-7 px-10 py-5 backdrop-blur-xl drop-shadow-md"
            >
                <nuxt-link to="/" class="text-white font-semibold text-xl">
                    I am Anxious
                </nuxt-link>
                <div class="flex-1"></div>
                <nuxt-link to="/share" class="text-white">Share</nuxt-link>
                <nuxt-link to="/read" class="text-white">Read</nuxt-link>
            </nav>
            <slot></slot>
            <footer>
                <div class="bg-black/10 p-4 text-white text-center">
                    <p>&copy; {{ new Date().getFullYear() }} I Am Anxious</p>
                </div>
            </footer>
        </div>
    </div>
</template>

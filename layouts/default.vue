<script setup lang="ts"></script>

<template>
    <div class="relative overflow-hidden overscroll-none">
        <!-- <cursor-glow class="z-10" /> -->
        <div class="pt-20 min-h-[85vh]">
            <nav
                class="z-20 fixed top-0 bg-white/10 border border-t-0 border-white/20 w-full flex gap-7 px-10 py-5 backdrop-blur-xl drop-shadow-2xl shadow-2xl rounded-b-2xl"
            >
                <nuxt-link to="/">
                    <service-logo />
                </nuxt-link>
                <div class="flex-1"></div>
            </nav>
            <div class="z-20 px-5 md:px-10 max-w-screen-2xl mx-auto">
                <slot></slot>
            </div>
        </div>
        <footer
            class="z-20 w-full mt-10 text-white/80 rounded-t-2xl bottom-0 bg-white/10 backdrop-blur-xl border border-white/20 border-b-0 drop-shadow-2xl shadow-2xl p-5 flex flex-col gap-10"
        >
            <div
                class="flex flex-col sm:flex-row flex-wrap max-w-screen-2xl gap-16 mx-auto w-full justify-between mt-5 px-5"
            >
                <div class="flex flex-col gap-2">
                    <service-logo class="mb-5" />
                    <p>Designed by <strong>Alla Medvedieva</strong></p>
                    <p>Developed by <strong>Max Kozachenko</strong></p>
                </div>
                <div
                    class="flex flex-col min-h-[100%] justify-center gap-8 text-white/70 font-semibold"
                >
                    <nuxt-link to="/about">About us →</nuxt-link>
                    <nuxt-link to="/read">Others’ worries →</nuxt-link>
                </div>
                <div class="flex flex-col gap-5 font-light text-white/40">
                    <p>
                        Questions, suggestions, or wish to support our
                        <br />

                        hosting efforts:
                        <a
                            href="mailto:iamanxious@kozachenko.io"
                            class="underline font-semibold text-white/80"
                        >
                            iamanxious@kozachenko.io
                        </a>
                    </p>
                    <p>
                        Want to work with us?
                        <a
                            href="mailto:projects@kozachenko.io"
                            class="underline font-semibold text-white/80"
                        >
                            projects@kozachenko.io
                        </a>
                    </p>
                </div>
            </div>
            <div class="flex flex-col text-center font-light">
                <p>&copy; {{ new Date().getFullYear() }} I Am Anxious</p>
            </div>
        </footer>
    </div>
</template>

<style>
html {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

body {
    height: 100%;
    padding: 0;
    overflow: auto;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    background-image: url("/bg3.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
</style>

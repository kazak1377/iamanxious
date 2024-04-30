<script setup lang="ts"></script>

<template>
    <div>
        <section class="max-w-screen-md mx-auto mt-40">
            <glass-card>
                <page-title>
                    I am Anxious – <br />
                    You're Not Alone
                </page-title>

                <p class="text-xl md:text-3xl p-4 font-semibold text-gray-300">
                    A private heaven where you can unburden your anxieties
                    anonymously and safely.
                </p>
            </glass-card>
        </section>
        <section class="max-w-screen-md mx-auto mt-10">
            <glass-card>
                <h2 class="text-2xl md:text-4xl p-4 font-bold text-gray-300">
                    How it Works
                </h2>
                <p class="text-lg md:text-xl p-4 text-gray-100">
                    Everyone has moments of doubt and anxiety, but no one should
                    have to face them alone. 'I am Anxious' provides a space
                    where you can share your fears and worries without revealing
                    your identity. Here, you can express yourself freely, browse
                    the concerns of others, and find solace in our shared human
                    experiences. Let’s navigate the complexities of life
                    together, anonymously.
                </p>
                <div
                    class="flex gap-4 flex-row items-center justify-start mt-10 p-4 flex-wrap"
                >
                    <nuxt-link
                        to="/share"
                        class="rounded-full bg-purple-800 text-white px-5 py-2 border border-purple-900 drop-shadow-xl shadow-lg"
                    >
                        Share your worries
                    </nuxt-link>
                    <nuxt-link
                        to="/read"
                        class="rounded-full bg-lime-700 text-white px-5 py-2 border border-lime-800 drop-shadow-xl shadow-lg"
                    >
                        Read others' worries
                    </nuxt-link>
                </div>
            </glass-card>
        </section>
    </div>
</template>

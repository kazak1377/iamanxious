<script setup lang="ts"></script>

<template>
    <div>
        <section class="max-w-screen-md mx-auto mt-40 mb-24">
            <glass-card>
                <page-title>
                    I am Anxious – <br />
                    You're Not Alone
                </page-title>

                <p class="text-3xl p-4 font-semibold text-gray-300">
                    A private heaven where you can unburden your anxieties
                    anonymously and safely.
                </p>
            </glass-card>
        </section>
        <section class="max-w-screen-md mx-auto mt-24 mb-24">
            <glass-card>
                <h2 class="text-4xl p-4 font-bold text-gray-300">
                    How it Works
                </h2>
                <p class="text-xl p-4 text-gray-100">
                    Everyone has moments of doubt and anxiety, but no one should
                    have to face them alone. 'I am Anxious' provides a space
                    where you can share your fears and worries without revealing
                    your identity. Here, you can express yourself freely, browse
                    the concerns of others, and find solace in our shared human
                    experiences. Let’s navigate the complexities of life
                    together, anonymously.
                </p>
                <div
                    class="flex gap-4 flex-row items-center justify-start mt-10 p-4"
                >
                    <nuxt-link
                        to="/share"
                        class="rounded-xl bg-purple-800 text-white px-10 py-4"
                    >
                        Share your worries
                    </nuxt-link>
                    <nuxt-link
                        to="/read"
                        class="rounded-xl bg-lime-700 text-white px-10 py-4"
                    >
                        Read others' worries
                    </nuxt-link>
                </div>
            </glass-card>
        </section>
    </div>
</template>

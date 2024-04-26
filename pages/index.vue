<script setup lang="ts">
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <div>
        <section class="max-w-screen-md mx-auto mt-40 mb-24">
            <h1
                class="text-7xl p-4 text-left font-bold from-purple-300 via-pink-300 to-blue-300 bg-gradient-to-r bg-clip-text text-transparent"
            >
                I am Anxious – <br />
                You're Not Alone
            </h1>
            <p class="text-3xl p-4 font-semibold text-gray-300">
                A private haven where you can unburden your anxieties
                anonymously and safely.
            </p>
        </section>
        <section class="max-w-screen-md mx-auto mt-40 mb-24">
            <h2 class="text-4xl p-4 font-bold text-gray-300">How it Works</h2>
            <p class="text-xl p-4 text-gray-100">
                Everyone has moments of doubt and anxiety, but no one should
                have to face them alone. 'I am Anxious' provides a space where
                you can share your fears and worries without revealing your
                identity. Here, you can express yourself freely, browse the
                concerns of others, and find solace in our shared human
                experiences. Let’s navigate the complexities of life together,
                anonymously.
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
        </section>
    </div>
</template>

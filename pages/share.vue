<template>
    <section class="mt-40 max-w-screen-md mx-auto">
        <glass-card>
            <page-title>Share what are you worried about</page-title>
            <div class="p-4">
                <textarea
                    v-model="worryText"
                    class="w-full h-48 p-4 mt-4 text-lg md:text-xl bg-black/5 border text-white/90 placeholder-white/70 border-black/10 resize-none shadow-inner rounded-lg focus:outline-none"
                    placeholder="What are you worried about?"
                ></textarea>
            </div>
            <div class="p-4">
                <button
                    @click="shareWorry"
                    class="rounded-full bg-purple-700 text-white px-5 py-2 border border-purple-800 drop-shadow-xl shadow-l hover:drop-shadow-2xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                    Share with the world
                </button>
            </div>
        </glass-card>
    </section>
</template>

<script lang="ts" setup>
const worryText = ref<string>("");
const { $client } = useNuxtApp();
const router = useRouter();

const shareWorry = async () => {
    if (worryText.value.trim() === "") {
        return;
    }

    await $client.worries.create.mutate({
        worry: worryText.value,
    });
    worryText.value = "";
    await router.push("/read");
};
</script>

<style></style>

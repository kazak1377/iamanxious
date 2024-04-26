<template>
    <section>
        <page-title>Share what are you worried about</page-title>
        <div class="p-4">
            <textarea
                v-model="worryText"
                class="w-full h-48 p-4 mt-4 text-xl bg-fuchsia-950/30 border text-white/75 border-fuchsia-800/40 rounded-lg focus:outline-none focus:border-transparent"
                placeholder="What are you worried about?"
            ></textarea>
        </div>
        <div class="p-4">
            <button
                @click="shareWorry"
                class="bg-purple-600 rounded px-7 py-4 text-white text-xl hover:ring-2 ring-fuchsia-300"
            >
                Share with the world
            </button>
        </div>
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

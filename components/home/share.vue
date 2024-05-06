<template>
    <glass-card class="w-full p-4">
        <gradient-text class="text-xl md:text-3xl font-semibold">
            I am worried about...
        </gradient-text>
        <div class="px-4">
            <textarea
                v-model="worryText"
                class="w-full h-48 p-4 mt-4 text-lg md:text-xl bg-black/5 border text-white/90 placeholder-white/40 border-black/10 resize-none shadow-inner rounded-lg focus:outline-none"
                placeholder="life, job, tasks, routine, Instagram, etc."
            ></textarea>
        </div>
        <div class="p-4" v-if="error">
            <p class="text-red-500 font-light">{{ error }}</p>
        </div>
        <div class="p-4">
            <button
                @click="shareWorry"
                class="let-the-worries-go-btn px-7 py-3 text-white uppercase rounded-lg font-semibold"
            >
                Let the worries
                <span class="italic pl-1">go</span>
            </button>
        </div>
    </glass-card>
</template>

<script lang="ts" setup>
import type { TRPCClientError } from "@trpc/client";
import type { AppRouter } from "@/server/trpc/routers";

const worryText = ref<string>("");
const { $client } = useNuxtApp();
const router = useRouter();
const error = ref<string | null>(null);

const shareWorry = async () => {
    error.value = null;
    if (worryText.value.trim() === "") {
        error.value = "Sometimes it's good to write something.";
        return;
    }

    try {
        await $client.worries.create.mutate({
            worry: worryText.value,
        });
        worryText.value = "";
        await router.push("/read");
    } catch (e) {
        const err = e as TRPCClientError<AppRouter["worries"]["create"]>;
        const errors = JSON.parse(err.message) as Array<{ message: string }>;
        const errorMessages = errors.map((e) => e.message).join(", ");

        error.value = errorMessages;
    }
};
</script>

<style>
.let-the-worries-go-btn {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background:
        linear-gradient(
            101.7deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.2) 21.5%,
            rgba(255, 255, 255, 0.28) 21.51%,
            rgba(255, 255, 255, 0) 45.14%
        ),
        radial-gradient(
                100% 144.66% at 0% 0%,
                rgba(145, 47, 193, 0.8) 0%,
                rgba(73, 121, 223, 0.8) 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 0px 20px 20px -10px rgba(169, 99, 215, 0.4);
}
</style>

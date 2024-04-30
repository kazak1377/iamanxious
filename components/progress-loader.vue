<template>
    <div class="flex w-full items-center justify-center content-center">
        <span class="loader"></span>
    </div>
</template>

<script lang="ts" setup></script>

<style>
.loader {
    position: relative;
    width: 100px;
    height: 100px;
}

.loader:before,
.loader:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3) inset;
}
.loader:after {
    box-shadow: 0 2px 0 #ffffff inset;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

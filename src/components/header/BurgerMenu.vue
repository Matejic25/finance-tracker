<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="flex items-center absolute right-4 z-10">
        <button @click="toggleMenu">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
        <div
            v-show="isOpen"
            class="flex flex-col dark:bg-gray-800 absolute top-11 -right-4 p-4 w-60 h-max"
        >
            <h1 class="text-xl font-bold text-center mb-2 italic">
                <RouterLink :to="{ name: 'dashboard' }"
                    >Finance Tracker</RouterLink
                >
            </h1>
            <hr />
            <section class="mt-6 px-2">
                <h3 class="text-md font-bold underline">Pages</h3>
                <nav class="flex flex-col py-2">
                    <RouterLink :to="{ name: 'dashboard' }" class="my-2"
                        >Dashboard</RouterLink
                    >
                    <RouterLink :to="{ name: 'about' }" class="my-2"
                        >About</RouterLink
                    >
                </nav>
            </section>
        </div>
    </div>
</template>

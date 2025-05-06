<script setup></script>

<template>
    <footer
        class="flex dark:bg-gray-800 dark:text-gray-300 bg-gray-200 h-32 items-center justify-between px-6 py-4 relative"
    >
        <div class="flex w-full justify-between">
            <div class="flex flex-col">
                <h2 class="text-xl font-bold italic dark:text-white">
                    Finance Tracker
                </h2>
                <p>Personal portfolio project</p>
            </div>
            <div class="flex flex-col">
                <p>Made By: <span class="italic">Nikola Matejić</span></p>
                <p>Year: <span class="italic">2025</span></p>
                <p>
                    Tech Stack:
                    <RouterLink :to="{ name: 'about' }"
                        ><span class="italic underline">About</span></RouterLink
                    >
                </p>
            </div>
        </div>
    </footer>
</template>

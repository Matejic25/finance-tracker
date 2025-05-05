<script setup></script>

<template>
    <div class="flex items-center justify-between w-full">
        <h1 class="text-xl font-bold text-center italic">
            <RouterLink to="/">Finance Tracker</RouterLink>
        </h1>
        <nav class="flex justify-end w-1/4 gap-4 text-white">
            <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
    </div>
</template>

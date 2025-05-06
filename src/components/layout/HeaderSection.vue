<script setup>
import BurgerMenu from '@/components/header/BurgerMenu.vue';
import NavigationBar from '@/components/header/NavigationBar.vue';
</script>

<template>
    <header>
        <div
            class="flex dark:bg-gray-800 dark:text-white bg-gray-200 h-16 items-center justify-between px-6"
        >
            <NavigationBar class="hidden sm:flex" />
            <BurgerMenu class="flex sm:hidden" />
        </div>
    </header>
</template>

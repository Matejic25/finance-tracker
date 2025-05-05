<script setup>
import Header from '@/components/layout/HeaderSection.vue';
import Footer from '@/components/layout/FooterSection.vue';
</script>

<template>
    <div>
        <Header />
        <main class="dark:text-white h-max min-h-screen">
            <slot />
        </main>
        <Footer />
    </div>
</template>

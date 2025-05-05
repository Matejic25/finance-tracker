<script setup>
import ItemCard from '@/components/about/ItemCard.vue';
</script>

<template>
    <ul class="flex flex-col h-full">
        <ItemCard class="border-blue-500 shadow-blue-500"
            >>
            <template #description>
                Advanced Vue 3 Composition API usage
            </template>
        </ItemCard>
        <ItemCard class="border-blue-500 shadow-blue-500">
            <template #description> Dynamic Routing and Route Guards </template>
        </ItemCard>
        <ItemCard class="border-blue-500 shadow-blue-500">
            <template #description>
                Component communication with props and emits
            </template>
        </ItemCard>
        <ItemCard class="border-blue-500 shadow-blue-500">
            <template #description> State management with Pinia </template>
        </ItemCard>
        <ItemCard class="border-blue-500 shadow-blue-500">
            <template #description>
                Form validation and user interaction
            </template>
        </ItemCard>
        <ItemCard class="border-blue-500 shadow-blue-500">
            <template #description>
                Best practices for scalability and maintainability
            </template>
        </ItemCard>
    </ul>
</template>

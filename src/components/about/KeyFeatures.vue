<script setup>
import ItemCard from '@/components/about/ItemCard.vue';
</script>

<template>
    <ul class="flex flex-col h-full">
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Add Transactions</template>
            <template #description
                >Record incomes and expenses with details like amount, category,
                and date.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Filter</template>
            <template #description
                >Filter transactions by type (income/expense) or by
                category.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>View Balance</template>
            <template #description
                >Automatically calculates total balance based on all
                transactions.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Edit & Delete</template>
            <template #description
                >Update or remove existing transactions.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Persistent Storage</template>
            <template #description
                >Transactions are saved locally (VueUse useStorage) so data
                persists between sessions.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Modular Architecture</template>
            <template #description
                >Separated concerns using Pinia for state management and Vue
                Router for navigation.</template
            >
        </ItemCard>
        <ItemCard class="border-yellow-500 shadow-yellow-500">
            <template #title>Responsive Design</template>
            <template #description
                >Fully responsive using TailwindCSS.</template
            >
        </ItemCard>
    </ul>
</template>

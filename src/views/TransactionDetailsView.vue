<script setup>
import DetailsTable from '@/components/details/DetailsTable.vue';
import UpdateTransactionForm from '@/components/details/UpdateTransactionForm.vue';
import { useRouter } from 'vue-router';
import { useTransactions } from '@/stores/useTransactions.js';
import { computed, watchEffect } from 'vue';

const router = useRouter();
const { getTransactionById } = useTransactions();
const transaction = computed(() =>
    getTransactionById(router.currentRoute.value.params.id),
);

watchEffect(() => {
    if (!transaction.value) {
        router.replace({ name: 'not-found' });
    }
});
</script>

<template>
    <div v-if="transaction">
        <div class="container mx-auto mt-16">
            <h1 class="text-3xl font-bold text-center my-6">
                Transaction Details
            </h1>
            <div class="flex flex-col md:flex-row px-8 md:p-0 mt-16">
                <DetailsTable :transaction="transaction" />
                <UpdateTransactionForm :transaction="transaction" />
            </div>
        </div>
    </div>
</template>

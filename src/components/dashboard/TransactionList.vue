<script setup>
import { useTransactions } from '@/stores/useTransactions.js';
import { computed, ref } from 'vue';
import { useModal } from '@/stores/useModal.js';

const { openModal } = useModal();
const { getTransactionById, removeTransaction } = useTransactions();
const filters = [
    {
        label: 'All',
        value: 'All',
    },
    {
        label: 'Incomes',
        value: 'Income',
    },
    {
        label: 'Expenses',
        value: 'Expense',
    },
];
const appliedFilter = ref('All');
const filteredTransactions = computed(() => {
    const { transactions } = useTransactions();
    return (transactions ?? []).filter(
        (transaction) =>
            appliedFilter.value === 'All' ||
            transaction.type === appliedFilter.value,
    );
});

function applyTypeFilter(type) {
    appliedFilter.value = type;
}

function handleRemove(id) {
    const transaction = getTransactionById(id);
    openModal(
        'Transaction Removed',
        `Transaction " ${transaction.title} " removed!`,
    );
    removeTransaction(id);
}
</script>

<template>
    <div>
        <div class="flex w-full justify-evenly mb-4">
            <button
                :class="[
                    'dark:bg-gray-700 bg-gray-300 px-4 py-1',
                    filter.value === appliedFilter
                        ? 'dark:bg-gray-700 bg-gray-300 px-4 py-1 border-2 dark:border-amber-600 border-amber-500'
                        : 'dark:bg-gray-700 bg-gray-300 px-4 py-1',
                ]"
                v-for="filter in filters"
                @click="applyTypeFilter(filter.value)"
                :key="filter.value"
            >
                {{ filter.label }}
            </button>
        </div>
        <ul
            class="flex flex-col sm:max-h-[50rem] sm:min-h-[50rem] max-h-[30rem] overflow-y-scroll"
        >
            <li
                v-for="transaction in filteredTransactions"
                :key="transaction.id"
                class="flex flex-col dark:bg-gray-700 bg-gray-300 py-3 items-center my-2"
            >
                <h2 class="text-2xl font-bold mb-2">{{ transaction.title }}</h2>
                <p class="text-xl">
                    <span
                        class="font-bold"
                        v-if="transaction.type === 'Expense'"
                        >- </span
                    >${{ transaction.amount.toFixed(2) }}
                </p>
                <p class="font-lg">{{ transaction.category }}</p>
                <RouterLink
                    :to="'transactions/' + transaction.id"
                    class="dark:bg-gray-800 bg-gray-200 py-1 px-4 mt-4"
                    >Details</RouterLink
                >
                <button
                    @click="handleRemove(transaction.id)"
                    class="dark:text-red-500 text-red-600 py-1"
                >
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

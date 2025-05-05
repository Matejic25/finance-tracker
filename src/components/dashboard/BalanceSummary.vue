<script setup>
import { useTransactions } from '@/stores/useTransactions.js';

const transactions = useTransactions();
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-6">
            <h1 class="font-bold text-lg">Current Balance</h1>
            <h1 class="text-2xl">
                ${{ transactions.currentBalance.toFixed(2) }}
            </h1>
        </div>
        <div class="flex justify-evenly w-full">
            <div class="flex flex-col items-center mr-2">
                <h1 class="font-bold">Total Income</h1>
                <h1 class="text-xl">
                    ${{ transactions.incomeTotal.toFixed(2) }}
                </h1>
            </div>
            <div class="flex flex-col items-center ml-2">
                <h1 class="font-bold">Total Expenses</h1>
                <h1 class="text-xl">
                    ${{ transactions.expenseTotal.toFixed(2) }}
                </h1>
            </div>
        </div>
    </div>
</template>

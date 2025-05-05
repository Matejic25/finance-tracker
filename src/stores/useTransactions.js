import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';

export const useTransactions = defineStore('transactions', () => {
    const transactions = useLocalStorage('transactions', []);
    const expenses = computed(() => {
        return transactions.value.filter(
            (transaction) => transaction.type === 'Expense',
        );
    });
    const incomes = computed(() => {
        return transactions.value.filter(
            (transaction) => transaction.type === 'Income',
        );
    });
    const expenseTotal = computed(() => {
        return sumByType(expenses.value);
    });
    const incomeTotal = computed(() => {
        return sumByType(incomes.value);
    });
    const currentBalance = computed(() => {
        return incomeTotal.value - expenseTotal.value;
    });

    function sumByType(transactions) {
        return transactions
            .map((transaction) => transaction.amount)
            .reduce((sum, curr) => sum + curr, 0);
    }

    function addTransaction(transaction) {
        return transactions.value.push(transaction);
    }

    function removeTransaction(id) {
        transactions.value = transactions.value.filter(
            (transaction) => transaction.id !== parseInt(id),
        );
    }

    function getTransactionById(id) {
        return transactions.value.find(
            (transaction) => transaction.id === parseInt(id),
        );
    }

    return {
        transactions,
        expenses,
        expenseTotal,
        incomeTotal,
        currentBalance,
        addTransaction,
        removeTransaction,
        getTransactionById,
    };
});

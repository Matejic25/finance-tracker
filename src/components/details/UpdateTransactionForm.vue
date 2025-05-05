<script setup>
import { watch } from 'vue';
import { useTransactions } from '@/stores/useTransactions.js';
import { useModal } from '@/stores/useModal.js';
import { useForm } from '@/composables/useForm.js';
import { useFormValidation } from '@/composables/useFormValidation.js';

const props = defineProps({
    transaction: {
        type: Object,
        required: true,
    },
});
const { getTransactionById } = useTransactions();
const { openModal } = useModal();
const {
    form: updateForm,
    errors,
    availableCategories,
    setFirstCategory,
} = useForm('update', {
    id: props.transaction.id,
    title: props.transaction.title,
    amount: props.transaction.amount,
    type: props.transaction.type,
    category: props.transaction.category,
    date: props.transaction.date,
    notes: props.transaction.notes,
});
const { validate } = useFormValidation();

function updateTransactionValues(currentTransaction) {
    currentTransaction.title = updateForm.title;
    currentTransaction.amount = updateForm.amount;
    currentTransaction.type = updateForm.type;
    currentTransaction.category = updateForm.category;
    currentTransaction.date = updateForm.date;
    currentTransaction.notes = updateForm.notes;
}

function handleUpdate() {
    if (validate(updateForm, errors)) {
        const currentTransaction = getTransactionById(props.transaction.id);
        openModal(
            'Transaction Updated',
            `Transaction " ${currentTransaction.title} " updated!`,
        );
        updateTransactionValues(currentTransaction);
    } else {
        console.warn('Invalid Form');
    }
}

watch(
    () => updateForm.type,
    () => {
        setFirstCategory();
    },
);
</script>

<template>
    <form
        class="flex flex-col w-full md:w-2/6 h-full mx-auto bg-gray-800 px-4 p-6 mt-8 md:mt-0 mb-16 sm:mb-0"
    >
        <div class="flex flex-col">
            <label for="title" class="text-gray-300 mb-1 mt-3">Title</label>
            <input
                v-model="updateForm.title"
                type="text"
                id="title"
                class="text-black"
            />
            <p v-if="errors.title">{{ errors.title }}</p>

            <label for="amount" class="text-gray-300 mb-1 mt-3">Amount</label>
            <input
                v-model="updateForm.amount"
                type="number"
                id="amount"
                class="text-black"
            />
            <p v-if="errors.amount">{{ errors.amount }}</p>

            <label for="type" class="text-gray-300 mb-1 mt-3">Type</label>
            <select v-model="updateForm.type" id="type" class="text-black">
                <option disabled value="">Select Type</option>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <p v-if="errors.type">{{ errors.type }}</p>

            <label for="category" class="text-gray-300 mb-1 mt-3"
                >Category (Select Type First)</label
            >
            <select
                v-model="updateForm.category"
                id="category"
                class="text-black"
                :disabled="!availableCategories.length"
            >
                <option disabled value="">Select Category</option>
                <option v-for="category in availableCategories" :key="category">
                    {{ category }}
                </option>
            </select>
            <p v-if="errors.category">{{ errors.category }}</p>

            <label for="date" class="text-gray-300 mb-1 mt-3">Date</label>
            <input
                v-model="updateForm.date"
                type="date"
                id="date"
                class="text-black"
            />
            <p v-if="errors.date">{{ errors.date }}</p>

            <label for="notes" class="text-gray-300 mb-1 mt-3">Notes</label>
            <input
                v-model="updateForm.notes"
                type="text"
                id="notes"
                class="text-black"
            />
            <button
                @click.prevent="handleUpdate"
                class="bg-amber-600 mt-8 p-2 font-bold"
            >
                Update
            </button>
        </div>
    </form>
</template>

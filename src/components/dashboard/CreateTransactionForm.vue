<script setup>
import { ref, watch } from 'vue';
import { useTransactions } from '@/stores/useTransactions.js';
import { useModal } from '@/stores/useModal.js';
import { useForm } from '@/composables/useForm.js';
import { useFormValidation } from '@/composables/useFormValidation.js';

const { openModal } = useModal();
const { form, availableCategories, errors, resetForm, setFirstCategory } =
    useForm('create');
const { validate } = useFormValidation();
const { addTransaction } = useTransactions();
const transaction = ref(null);

function handleSubmit() {
    if (validate(form, errors)) {
        transaction.value = { ...form };
        addTransaction(transaction.value);
        resetForm();
        openModal(
            'Transaction Added',
            `Transaction " ${transaction.value.title} " added!`,
        );
    } else {
        console.warn('Invalid Form');
    }
}

watch(
    () => form.type,
    () => {
        setFirstCategory();
    },
);
</script>

<template>
    <form
        class="flex flex-col w-full h-full mt-8 bg-gray-800 px-4 p-6 lg:max-h-full overflow-y-scroll lg:overflow-y-visible"
    >
        <div
            class="lg:grid lg:grid-cols-2 lg:grid-rows-5 h-full lg:gap-2 flex-flex-col"
        >
            <div class="col-span-2 flex flex-col w-full max-h-min">
                <label for="title" class="text-gray-300 mb-1 mt-3">Title</label>
                <input
                    v-model="form.title"
                    type="text"
                    id="title"
                    class="text-black"
                />
                <p v-if="errors.title">{{ errors.title }}</p>
            </div>
            <div class="flex flex-col max-h-min">
                <label for="type" class="text-gray-300 mb-1 mt-3">Type</label>
                <select v-model="form.type" id="type" class="text-black">
                    <option disabled value="">Select Type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                <p v-if="errors.type">{{ errors.type }}</p>
            </div>
            <div class="flex flex-col max-h-min">
                <label for="category" class="text-gray-300 mb-1 mt-3"
                    >Category (Select Type First)</label
                >
                <select
                    v-model="form.category"
                    id="category"
                    class="text-black"
                    :disabled="!availableCategories.length"
                >
                    <option disabled value="">Select Category</option>
                    <option
                        v-for="category in availableCategories"
                        :key="category"
                    >
                        {{ category }}
                    </option>
                </select>
                <p v-if="errors.category">{{ errors.category }}</p>
            </div>
            <div class="col-span flex flex-col max-h-min">
                <label for="amount" class="text-gray-300 mb-1 mt-3"
                    >Amount</label
                >
                <input
                    v-model="form.amount"
                    type="number"
                    id="amount"
                    class="text-black"
                />
                <p v-if="errors.amount">{{ errors.amount }}</p>
            </div>
            <div class="col-span flex flex-col max-h-min">
                <label for="date" class="text-gray-300 mb-1 mt-3">Date</label>
                <input
                    v-model="form.date"
                    type="date"
                    id="date"
                    class="text-black"
                />
                <p v-if="errors.date">{{ errors.date }}</p>
            </div>
            <div class="col-span-2 flex flex-col max-h-min">
                <label for="notes" class="text-gray-300 mb-1 mt-3">Notes</label>
                <input
                    v-model="form.notes"
                    type="text"
                    id="notes"
                    class="text-black h-full"
                />
            </div>
            <button
                @click.prevent="handleSubmit"
                class="bg-amber-600 mt-8 p-2 font-bold col-span-2 w-full lg:mb-0 mb-8 self-center h-12"
            >
                Add Transaction
            </button>
        </div>
    </form>
</template>

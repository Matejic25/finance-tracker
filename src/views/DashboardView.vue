<script setup>
import { ref } from 'vue';
import AddTransactionForm from '@/components/dashboard/CreateTransactionForm.vue';
import Wrapper from '@/components/layout/WrapperComponent.vue';
import TransactionList from '@/components/dashboard/TransactionList.vue';
import Summary from '@/components/dashboard/BalanceSummary.vue';
import NewTransactionButton from '@/components/dashboard/OpenTransactionFormButton.vue';

const isFormShown = ref(false);

function toggleForm() {
    isFormShown.value = !isFormShown.value;
}
</script>

<template>
    <div class="container mx-auto mt-16 px-8 md:px-0">
        <h1 class="text-3xl font-bold text-center my-6">Dashboard</h1>
        <div
            class="sm:grid sm:grid-rows-3 sm:grid-cols-2 gap-8 mt-16 flex flex-col md:max-h-[60rem] md:min-h-[60rem]"
        >
            <Wrapper>
                <template #title>
                    <h1 class="text-2xl font-bold text-center mb-6">
                        Balance Summary
                    </h1>
                </template>
                <template #content>
                    <Summary />
                </template>
            </Wrapper>
            <div
                class="row-span-2 flex flex-col items-center justify-start w-full max-w-lg md:max-w-full mx-auto"
            >
                <NewTransactionButton @onClick="toggleForm" />
                <transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-2"
                >
                    <AddTransactionForm v-show="isFormShown" />
                </transition>
            </div>
            <Wrapper
                class="row-span-3 col-start-2 row-start-1 mb-16 sm:mb-0 sm:max-h-[60rem] overflow-hidden"
            >
                <template #title>
                    <h1 class="text-2xl font-bold text-center w-full mb-6">
                        Transaction List
                    </h1>
                </template>
                <template #content>
                    <TransactionList />
                </template>
            </Wrapper>
        </div>
    </div>
</template>

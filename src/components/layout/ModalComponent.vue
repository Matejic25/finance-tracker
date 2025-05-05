<script setup>
import { useModal } from '@/stores/useModal.js';

const { closeModal, title, body } = useModal();

function handleClose() {
    closeModal();
}
</script>

<template>
    <div
        class="flex flex-col md:px-8 md:py-8 md:w-2/6 md:max-w-2xl md:min-w-[30rem] min-w-[15rem] w-1/2 px-4 py-4 absolute bg-gray-300 top-8 z-10"
    >
        <div>
            <h1 class="text-2xl text-gray-800 font-bold text-center mb-2">
                {{ title }}
            </h1>
        </div>
        <hr class="border border-gray-800" />
        <div>
            <p class="text-lg text-center text-gray-800 mt-4 mb-8">
                {{ body }}
            </p>
        </div>
        <button
            class="bg-gray-700 w-2/5 mx-auto py-2 text-gray-200"
            @click="handleClose"
        >
            Close
        </button>
    </div>
</template>

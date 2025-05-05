<script setup>
const emit = defineEmits(['onClick']);

function emitOnClick() {
    emit('onClick');
}
</script>

<template>
    <button
        @click="emitOnClick"
        class="text-2xl font-bold text-center w-full bg-gray-800 py-2"
    >
        New Transaction
    </button>
</template>

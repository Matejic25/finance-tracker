<script setup></script>

<template>
    <div
        class="flex flex-col bg-gray-800 py-8 px-4 mb-8 mx-auto col-span-3 md:max-w-full max-w-[90%]"
    >
        <slot name="title" />
        <slot name="content" />
    </div>
</template>

<script setup></script>

<template>
    <div
        class="flex flex-col dark:bg-gray-800 bg-gray-100 py-8 px-4 my-8 max-w-[90%] mx-auto lg:max-w-full lg:w-full sm:mx-auto"
    >
        <slot name="title" />
        <slot name="content" />
    </div>
</template>

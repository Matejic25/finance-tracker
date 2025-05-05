<script setup></script>

<template>
    <div
        class="w-full sm:max-w-4xl max-w-lg min-w-max md:w-full mx-auto bg-gray-800 py-8 px-4 h-fit"
    >
        <slot name="title" />
        <slot name="content" />
    </div>
</template>

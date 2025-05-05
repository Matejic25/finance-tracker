<script setup></script>

<template>
    <li
        class="min-h-max bg-gray-900 flex justify-between items-center px-1 py-4 my-4 border-2 border-emerald-600 shadow shadow-emerald-600"
    >
        <div class="flex flex-col ml-2">
            <span class="font-bold"><slot name="title" /></span>
            <span class="px-2"><slot name="description" /></span>
        </div>
        <span class="w-8 mr-2"><slot name="image" /></span>
    </li>
</template>

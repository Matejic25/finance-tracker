<script setup></script>

<template>
    <li
        class="min-h-max dark:bg-gray-800 bg-gray-200 flex flex-col justify-center px-1 py-4 my-4 border-2 shadow"
    >
        <div class="flex flex-col justify-center ml-2 h-max">
            <span class="font-bold"><slot name="title" /></span>
            <span class="px-2"><slot name="description" /></span>
        </div>
    </li>
</template>

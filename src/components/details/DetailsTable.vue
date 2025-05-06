<script setup>
const props = defineProps({
    transaction: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <table class="dark:bg-gray-800 bg-gray-200 w-full md:w-3/5 mx-auto">
        <tbody>
            <tr
                v-for="(data, type) in props.transaction"
                class="dark:even:bg-gray-900 even:bg-gray-300"
                :key="type"
            >
                <th class="md:py-10 md:px-16 py-5 px-4 text-lg text-left">
                    {{ type.charAt(0).toUpperCase() + type.slice(1) }}
                </th>
                <td class="md:py-10 md:px-16 py-5 px-4 text-lg text-center">
                    {{ data }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import pinia from '@/assets/pinia.svg';
import tailwindcss from '@/assets/tailwindcss.svg';
import vitejs from '@/assets/vitejs.svg';
import vue from '@/assets/vue.svg';
import vueuse from '@/assets/vueuse.svg';
import ItemCardWithImage from '@/components/about/ItemCardWithImage.vue';
</script>

<template>
    <ul class="flex flex-col h-full">
        <ItemCardWithImage>
            <template #title>Vue 3</template>
            <template #description>Composition API + Script Setup</template>
            <template #image><img :src="vue" alt="vue3" /></template>
        </ItemCardWithImage>
        <ItemCardWithImage>
            <template #title>Pinia</template>
            <template #description>State Management</template>
            <template #image><img :src="pinia" alt="pinia" /></template>
        </ItemCardWithImage>
        <ItemCardWithImage>
            <template #title>Vue Router</template>
            <template #description>Routing and Navigation</template>
            <template #image><img :src="vue" alt="vue-router" /></template>
        </ItemCardWithImage>
        <ItemCardWithImage>
            <template #title>TailwindCSS</template>
            <template #description>UI Styling</template>
            <template #image
                ><img :src="tailwindcss" alt="tailwindcss"
            /></template>
        </ItemCardWithImage>
        <ItemCardWithImage>
            <template #title>VueUse</template>
            <template #description>Composition Utilities</template>
            <template #image
                ><img :src="vueuse" alt="vueuse" class="w-8"
            /></template>
        </ItemCardWithImage>
        <ItemCardWithImage>
            <template #title>Vite</template>
            <template #description>Build Tool and Dev Server</template>
            <template #image><img :src="vitejs" alt="vitejs" /></template>
        </ItemCardWithImage>
    </ul>
</template>

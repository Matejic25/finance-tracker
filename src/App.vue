<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRoute } from 'vue-router';
import Modal from '@/components/layout/ModalComponent.vue';
import ScreenOverlay from '@/components/layout/ScreenOverlay.vue';
import { useModal } from '@/stores/useModal.js';

const modal = useModal();

const route = useRoute();

const layouts = {
    default: DefaultLayout,
};
</script>

<template>
    <component
        :is="layouts[route.meta.layout || 'default']"
        class="dark:bg-gray-700"
    >
        <div v-if="modal.isOpen">
            <Teleport to="#overlay-holder">
                <ScreenOverlay />
            </Teleport>
            <Teleport to="#modals">
                <Modal />
            </Teleport>
        </div>
        <RouterView />
    </component>
</template>

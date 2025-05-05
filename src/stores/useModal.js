import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModal = defineStore('modal', () => {
    const isOpen = ref(false);
    const title = ref('');
    const body = ref('');

    function openModal(titleContent, bodyContent) {
        title.value = titleContent;
        body.value = bodyContent;
        isOpen.value = true;
    }

    function closeModal() {
        isOpen.value = false;
        title.value = '';
        body.value = '';
    }

    return { isOpen, title, body, openModal, closeModal };
});

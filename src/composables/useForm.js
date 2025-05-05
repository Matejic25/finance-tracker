import { computed, reactive, ref } from 'vue';

export function useForm(mode = 'create', initialData = {}) {
    const expenseCategories = [
        'Rent',
        'Groceries',
        'Utilities',
        'Transportation',
        'Healthcare',
        'Entertainment',
        'Dining Out',
        'Clothing',
        'Subscriptions',
        'Insurance',
        'Debt Payments',
        'Education',
        'Gifts & Donations',
        'Travel',
        'Pets',
    ];

    const incomeCategories = [
        'Salary',
        'Freelance',
        'Business',
        'Investments',
        'Rental Income',
        'Interest',
        'Dividends',
        'Bonuses',
        'Grants',
        'Government Assistance',
        'Gifts Received',
        'Refunds & Reimbursements',
    ];

    const chosenCategory = ref(mode === 'update' ? initialData.category : '');
    const form = reactive({
        ...(mode === 'update' ? initialData : {}),
        id: Date.now(),
        category: chosenCategory,
    });

    const errors = reactive({
        title: '',
        amount: '',
        type: '',
        category: '',
        date: '',
    });

    function resetForm() {
        form.id = Date.now();
        form.title = '';
        form.amount = 0;
        form.type = '';
        form.category = '';
        form.date = '';
        form.notes = '';
    }

    function setFirstCategory() {
        if (form.type !== '') {
            if (form.type === 'Expense') {
                chosenCategory.value = expenseCategories[0];
            } else {
                chosenCategory.value = incomeCategories[0];
            }
        } else {
            chosenCategory.value = '';
        }
    }

    const availableCategories = computed(() =>
        form.type === 'Expense'
            ? expenseCategories
            : form.type === 'Income'
              ? incomeCategories
              : [],
    );

    return {
        form,
        errors,
        resetForm,
        availableCategories,
        setFirstCategory,
    };
}

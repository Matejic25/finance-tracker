export function useFormValidation() {
    const validationRules = {
        title: {
            check: (val) => val.trim() !== '',
            message: 'Please enter a title.',
        },
        amount: {
            check: (val) => val > 0,
            message: 'Please enter a valid amount',
        },
        type: {
            check: (val) => val !== '',
            message: 'Please select a transaction type.',
        },
        category: {
            check: (val) => val !== '',
            message: 'Please choose a category.',
        },
        date: {
            check: (val) => val !== '',
            message: 'Please provide a date.',
        },
    };

    function validate(form, errors) {
        let isValid = true;

        for (const field in validationRules) {
            const rule = validationRules[field];
            if (!rule.check(form[field])) {
                errors[field] = rule.message;
                isValid = false;
            } else {
                errors[field] = '';
            }
        }

        return isValid;
    }

    return { validate };
}

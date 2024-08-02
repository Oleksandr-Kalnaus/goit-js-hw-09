const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
    email: "",
    message: ""
};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataFromLS) {
        for (const key in formDataFromLS) {
            if (feedbackFormEl.elements[key]) {
                feedbackFormEl.elements[key].value = formDataFromLS[key].trim();
                formData[key] = formDataFromLS[key].trim();
            }
        }
    }
};

fillFormFields();

const onFormFieldChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();
    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log({ email: formData.email, message: formData.message });

    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
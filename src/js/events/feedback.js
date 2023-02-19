const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

populateInputFields();

const formData = {
    email: '',
    message: '',
};

const onHandleInput = e => {
    switch (e.target.name) {
        case "email":
            formData.email = form.email.value;
            formData.message = form.message.value;
            break
        case "message":
            formData.email = form.email.value;
            formData.message = form.message.value;
            break
        default: return;
    };
  
    const stringifyFormData = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, stringifyFormData); 
};

function populateInputFields() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!savedFormData) {
        return;
    }; 
    const email = form.elements.email;
    const message = form.elements.message;
    
      email.value = savedFormData.email;
      message.value = savedFormData.message;
};

form.addEventListener('input', onHandleInput);
form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    e.currentTarget.reset();
    console.log(JSON.stringify(formData))
    localStorage.removeItem(STORAGE_KEY);
});

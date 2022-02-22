const password_field = document.querySelector('#password');
const warning_block = document.querySelector('.warning-message');
const warning_paragraph = document.querySelector('#warning-paragraph');
const radiobuttons = document.querySelectorAll('input[name="password-length"]');
const copy_button = document.querySelector('#copy-button');

function handleRadioChange(radiobutton) {

    function makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/*\.,:@#$%{}()[]`~;<>';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    if (radiobutton.value === 'short') {
        password_field.value = makeid(8);
    }
    if (radiobutton.value === 'medium') {
        password_field.value = makeid(16);
    }
    if (radiobutton.value === 'large') {
        password_field.value = makeid(32);
    }
}

function handleCopyClick() {
    if (password_field.value.length > 0) {
        navigator.clipboard.writeText(password_field.value);
    }
}

function handleWarningMessage() {
    if (password_field.value.length > 0) {
        warning_paragraph.classList.add('show');
        warning_paragraph.classList.remove('none');
        copy_button.disabled = true;
        setTimeout(() => {
            copy_button.disabled = false;
            warning_paragraph.classList.add('none');
            warning_paragraph.classList.remove('show');
        }, 3000)
    }
}

function hanleGenerateClick() {
    let selectedSize;
    for (const radioButton of radiobuttons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }

    function makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/*\.,:@#$%{}()[]`~;<>';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    if (selectedSize === 'short') {
        password_field.value = makeid(8);
    }
    if (selectedSize === 'medium') {
        password_field.value = makeid(16);
    }
    if (selectedSize === 'large') {
        password_field.value = makeid(32);
    }
}
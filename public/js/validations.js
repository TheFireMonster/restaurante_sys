function validate_email(emailId, formId) {
    var regexEmail = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var emailElement = document.getElementById(emailId);
    if (!emailElement) {
        console.error("Elemento email não encontrado!");
        return false;
    }
    var emailValue = emailElement.value;
    if (regexEmail.test(emailValue)) {
        alert("Endereço de e-mail válido!");
        return true;
    }
    else {
        alert("Endereço de e-mail inválido!");
        return false;
    }
}
function validate_name(nameId, formId) {
    var regexName = RegExp(/^(?=.{1,60}$)[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var nameElement = document.getElementById(nameId);
    if (!nameElement) {
        console.error("Elemento nome não encontrado");
        return false;
    }
    var nameValue = nameElement.value;
    if (regexName.test(nameValue)) {
        alert("Nome válido!");
        return true;
    }
    else {
        alert("Nome inválido!");
        return false;
    }
}
function validate_password(passId, formId) {
    var regexPass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var passElement = document.getElementById(passId);
    if (!passElement) {
        console.error("Elemento senha não encontrado");
        return false;
    }
    var passValue = passElement.value;
    if (regexPass.test(passValue)) {
        alert("Senha válida!");
        return true;
    }
    else {
        alert("Senha inválida!");
        return false;
    }
}
function validate_phone(phoneId) {
    var phoneInput = document.getElementById(phoneId);
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            var target = e.target;
            var value = target.value;
            var phonePattern = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2 ')
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(-\d{4})\d+?$/, '$1');
            target.value = phonePattern;
        });
    }
}
;
function validate_cpf(cpfId) {
    var cpfInput = document.getElementById(cpfId);
    if (cpfInput) {
        cpfInput.addEventListener('input', function (e) {
            var target = e.target;
            var value = target.value;
            var cpfPattern = value
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1');
            target.value = cpfPattern;
        });
    }
}
;
function validate_id(idId, formId) {
    var regexId = RegExp(/\d/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var IdElement = document.getElementById(idId);
    if (!IdElement) {
        console.error("Elemento email não encontrado!");
        return false;
    }
    var IdValue = IdElement.value;
    if (regexId.test(IdValue)) {
        alert("Endereço de e-mail válido!");
        return true;
    }
    else {
        alert("Endereço de e-mail inválido!");
        return false;
    }
}
function validate_quant(quantId, formId) {
    var regexQuant = RegExp(/\d{1,4}/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var IdElement = document.getElementById(quantId);
    if (!IdElement) {
        console.error("Elemento email não encontrado!");
        return false;
    }
    var IdValue = IdElement.value;
    if (regexQuant.test(IdValue)) {
        alert("Endereço de e-mail válido!");
        return true;
    }
    else {
        alert("Endereço de e-mail inválido!");
        return false;
    }
}
function validate_text(textId, formId) {
    var regexText = RegExp(/^[A-Za-z0-9À-ÖØ-öø-ÿ.,;:'"\-()!?\s]{5,200}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var nameElement = document.getElementById(textId);
    if (!nameElement) {
        console.error("Elemento de texto não encontrado");
        return false;
    }
    var nameValue = nameElement.value;
    if (regexText.test(nameValue)) {
        alert("Texto válido!");
        return true;
    }
    else {
        alert("Texto inválido!");
        return false;
    }
}
function validate_product_type(productId, formId) {
    var regexProductType = RegExp(/\b(Pizza|Bebida)\b/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var productElement = document.getElementById(productId);
    if (!productElement) {
        console.error("Elemento nome não encontrado");
        return false;
    }
    var productValue = productElement.value;
    if (regexProductType.test(productValue)) {
        alert("Tipo de produto válido!");
        return true;
    }
    else {
        alert("Tipo inválido!");
        return false;
    }
}
function validate_price(priceId, formId) {
    var regexPrice = RegExp(/^(R\$|\$|€|£|¥)(\d{1,3}(\.\d{3})*|\d+)(,\d{1,2})?$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    var productElement = document.getElementById(priceId);
    if (!productElement) {
        console.error("Elemento preço não encontrado");
        return false;
    }
    var productValue = productElement.value;
    if (regexPrice.test(productValue)) {
        alert("Preço válido!");
        return true;
    }
    else {
        alert("Preço inválido!");
        return false;
    }
}

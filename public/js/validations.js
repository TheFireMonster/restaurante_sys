function validate_email(emailId, formId) {
    var regexEmail = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var emailElement = document.getElementById(emailId);
    if (!emailElement) {
        console.error("Elemento email não encontrado!");
        return;
    }
    var emailValue = emailElement.value;
    if (regexEmail.test(emailValue)) {
        alert("Endereço de e-mail válido!");
    }
    else {
        alert("Endereço de e-mail inválido!");
    }
}
function validate_name(nameId, formId) {
    var regexName = RegExp(/^(?=.{1,60}$)[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var nameElement = document.getElementById(nameId);
    if (!nameElement) {
        console.error("Elemento nome não encontrado");
    }
    var nameValue = nameElement.value;
    if (regexName.test(nameValue)) {
        alert("Nome válido!");
    }
    else {
        alert("Nome inválido!");
    }
}
function validate_password(passId, formId) {
    var regexPass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var passElement = document.getElementById(passId);
    if (!passElement) {
        console.error("Elemento senha não encontrado");
    }
    var passValue = passElement.value;
    if (regexPass.test(passValue)) {
        alert("Senha válida!");
    }
    else {
        alert("Senha inválida!");
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
        return;
    }
    var IdElement = document.getElementById(idId);
    if (!IdElement) {
        console.error("Elemento email não encontrado!");
        return;
    }
    var IdValue = IdElement.value;
    if (regexId.test(IdValue)) {
        alert("Endereço de e-mail válido!");
    }
    else {
        alert("Endereço de e-mail inválido!");
    }
}
function validate_quant(quantId, formId) {
    var regexQuant = RegExp(/\d{1,4}/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var IdElement = document.getElementById(quantId);
    if (!IdElement) {
        console.error("Elemento email não encontrado!");
        return;
    }
    var IdValue = IdElement.value;
    if (regexQuant.test(IdValue)) {
        alert("Endereço de e-mail válido!");
    }
    else {
        alert("Endereço de e-mail inválido!");
    }
}
function validate_text(textId, formId) {
    var regexText = RegExp(/^[A-Za-z0-9À-ÖØ-öø-ÿ.,;:'"\-()!?\s]{5,200}$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var nameElement = document.getElementById(textId);
    if (!nameElement) {
        console.error("Elemento de texto não encontrado");
    }
    var nameValue = nameElement.value;
    if (regexText.test(nameValue)) {
        alert("Texto válido!");
    }
    else {
        alert("Texto inválido!");
    }
}
function validate_product_type(productId, formId) {
    var regexProductType = RegExp(/\b(Pizza|Bebida)\b/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var productElement = document.getElementById(productId);
    if (!productElement) {
        console.error("Elemento nome não encontrado");
    }
    var productValue = productElement.value;
    if (regexProductType.test(productValue)) {
        alert("Tipo de produto válido!");
    }
    else {
        alert("Tipo inválido!");
    }
}
function validate_price(priceId, formId) {
    var regexPrice = RegExp(/^(R\$|\$|€|£|¥)(\d{1,3}(\.\d{3})*|\d+)(,\d{1,2})?$/);
    var formElement = document.getElementById(formId);
    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    var productElement = document.getElementById(priceId);
    if (!productElement) {
        console.error("Elemento preço não encontrado");
    }
    var productValue = productElement.value;
    if (regexPrice.test(productValue)) {
        alert("Preço válido!");
    }
    else {
        alert("Preço inválido!");
    }
}

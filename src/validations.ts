function validate_email(emailId: string, formId: string): void {
    const regexEmail = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    
        const emailElement = document.getElementById(emailId) as HTMLInputElement;
        if (!emailElement) {
            console.error("Elemento email não encontrado!");
            return;
        }

        const emailValue = emailElement.value;
        if (regexEmail.test(emailValue)) {
            alert("Endereço de e-mail válido!");
        } else {
            alert("Endereço de e-mail inválido!");
        }
}

function validate_name(nameId: string, formId: string): void{
    const regexName = RegExp(/^(?=.{1,60}$)[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }

        const nameElement = document.getElementById(nameId) as HTMLInputElement;
        if (!nameElement) {
            console.error("Elemento nome não encontrado")
        }

        const nameValue = nameElement.value;
        if (regexName.test(nameValue)) {
            alert("Nome válido!");
        } else {
            alert("Nome inválido!");
        }
}

function validate_password(passId: string, formId: string): void{
    const regexPass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }

        const passElement = document.getElementById(passId) as HTMLInputElement;
        if (!passElement) {
            console.error("Elemento senha não encontrado")
        }

        const passValue = passElement.value;
        if (regexPass.test(passValue)) {
            alert("Senha válida!");
        } else {
            alert("Senha inválida!");
        }
}

function validate_phone(phoneId: string): void {
        const phoneInput = document.getElementById(phoneId) as HTMLInputElement;

        if (phoneInput) {
            phoneInput.addEventListener('input', (e: Event) => {
                const target = e.target as HTMLInputElement;
                let value = target.value;
                let phonePattern = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2 ')
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(-\d{4})\d+?$/, '$1');
                target.value = phonePattern;
            });
        }
    };


function validate_cpf(cpfId: string): void {
        const cpfInput = document.getElementById(cpfId) as HTMLInputElement;
        if (cpfInput) {
            cpfInput.addEventListener('input', (e: Event) => {
                const target = e.target as HTMLInputElement;
                let value = target.value;
                let cpfPattern = value 
                    .replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2') 
                    .replace(/(\d{3})(\d)/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1'); 
                target.value = cpfPattern;
            });
        }
    };

function validate_id(idId: string, formId: string): void {
    const regexId = RegExp(/\d/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    
        const IdElement = document.getElementById(idId) as HTMLInputElement;
        if (!IdElement) {
            console.error("Elemento email não encontrado!");
            return;
        }

        const IdValue = IdElement.value;
        if (regexId.test(IdValue)) {
            alert("Endereço de e-mail válido!");
        } else {
            alert("Endereço de e-mail inválido!");
        }
}

function validate_quant(quantId: string, formId: string): void {
    const regexQuant = RegExp(/\d{1,4}/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }
    
        const IdElement = document.getElementById(quantId) as HTMLInputElement;
        if (!IdElement) {
            console.error("Elemento email não encontrado!");
            return;
        }

        const IdValue = IdElement.value;
        if (regexQuant.test(IdValue)) {
            alert("Endereço de e-mail válido!");
        } else {
            alert("Endereço de e-mail inválido!");
        }
}

function validate_text(textId: string, formId: string): void{
    const regexText = RegExp(/^[A-Za-z0-9À-ÖØ-öø-ÿ.,;:'"\-()!?\s]{5,200}$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }

        const nameElement = document.getElementById(textId) as HTMLInputElement;
        if (!nameElement) {
            console.error("Elemento de texto não encontrado")
        }

        const nameValue = nameElement.value;
        if (regexText.test(nameValue)) {
            alert("Texto válido!");
        } else {
            alert("Texto inválido!");
        }
}

function validate_product_type(productId: string, formId: string): void{
    const regexProductType = RegExp(/\b(Pizza|Bebida)\b/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }

        const productElement = document.getElementById(productId) as HTMLInputElement;
        if (!productElement) {
            console.error("Elemento nome não encontrado")
        }

        const productValue = productElement.value;
        if (regexProductType.test(productValue)) {
            alert("Tipo de produto válido!");
        } else {
            alert("Tipo inválido!");
        }
}

function validate_price(priceId: string, formId: string): void{
    const regexPrice = RegExp(/^(R\$|\$|€|£|¥)(\d{1,3}(\.\d{3})*|\d+)(,\d{1,2})?$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return;
    }

        const productElement = document.getElementById(priceId) as HTMLInputElement;
        if (!productElement) {
            console.error("Elemento preço não encontrado")
        }

        const productValue = productElement.value;
        if (regexPrice.test(productValue)) {
            alert("Preço válido!");
        } else {
            alert("Preço inválido!");
        }
}
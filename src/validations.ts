function validate_email(emailId: string, formId: string): boolean {
    const regexEmail = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    
        const emailElement = document.getElementById(emailId) as HTMLInputElement;
        if (!emailElement) {
            console.error("Elemento email não encontrado!");
            return false;
        }

        const emailValue = emailElement.value;
        if (regexEmail.test(emailValue)) {
            alert("Endereço de e-mail válido!");
            return true;
        } else {
            alert("Endereço de e-mail inválido!");
            return false;
        }
}

function validate_name(nameId: string, formId: string): boolean {
    const regexName = RegExp(/^(?=.{1,60}$)[A-Za-zÀ-ÖØ-öø-ÿ-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ-]+)*$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }

        const nameElement = document.getElementById(nameId) as HTMLInputElement;
        if (!nameElement) {
            console.error("Elemento nome não encontrado")
            return false;
        }

        const nameValue = nameElement.value;
        if (regexName.test(nameValue)) {
            alert("Nome válido!");
            return true;
        } else {
            alert("Nome inválido!");
            return false;
        }
}

function validate_password(passId: string, formId: string): boolean{
    const regexPass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }

        const passElement = document.getElementById(passId) as HTMLInputElement;
        if (!passElement) {
            console.error("Elemento senha não encontrado")
            return false;
        }

        const passValue = passElement.value;
        if (regexPass.test(passValue)) {
            alert("Senha válida!");
            return true;
        } else {
            alert("Senha inválida!");
            return false;
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

function validate_id(idId: string, formId: string): boolean {
    const regexId = RegExp(/\d/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    
        const IdElement = document.getElementById(idId) as HTMLInputElement;
        if (!IdElement) {
            console.error("Elemento email não encontrado!");
            return false;
        }

        const IdValue = IdElement.value;
        if (regexId.test(IdValue)) {
            alert("Endereço de e-mail válido!");
            return true;
        } else {
            alert("Endereço de e-mail inválido!");
            return false;
        }
}

function validate_quant(quantId: string, formId: string): boolean {
    const regexQuant = RegExp(/\d{1,4}/);
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }
    
        const IdElement = document.getElementById(quantId) as HTMLInputElement;
        if (!IdElement) {
            console.error("Elemento email não encontrado!");
            return false;
        }

        const IdValue = IdElement.value;
        if (regexQuant.test(IdValue)) {
            alert("Endereço de e-mail válido!");
            return true;
        } else {
            alert("Endereço de e-mail inválido!");
            return false;
        }
}

function validate_text(textId: string, formId: string): boolean{
    const regexText = RegExp(/^[A-Za-z0-9À-ÖØ-öø-ÿ.,;:'"\-()!?\s]{5,200}$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }

        const nameElement = document.getElementById(textId) as HTMLInputElement;
        if (!nameElement) {
            console.error("Elemento de texto não encontrado")
            return false;
        }

        const nameValue = nameElement.value;
        if (regexText.test(nameValue)) {
            alert("Texto válido!");
            return true;
        } else {
            alert("Texto inválido!");
            return false;
        }
}

function validate_product_type(productId: string, formId: string): boolean{
    const regexProductType = RegExp(/\b(Pizza|Bebida)\b/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }

        const productElement = document.getElementById(productId) as HTMLInputElement;
        if (!productElement) {
            console.error("Elemento nome não encontrado")
            return false;
        }

        const productValue = productElement.value;
        if (regexProductType.test(productValue)) {
            alert("Tipo de produto válido!");
            return true;
        } else {
            alert("Tipo inválido!");
            return false;
        }
}

function validate_price(priceId: string, formId: string): boolean{
    const regexPrice = RegExp(/^(R\$|\$|€|£|¥)(\d{1,3}(\.\d{3})*|\d+)(,\d{1,2})?$/)
    const formElement = document.getElementById(formId);

    if (!formElement) {
        console.error("Elemento formulário não encontrado");
        return false;
    }

        const productElement = document.getElementById(priceId) as HTMLInputElement;
        if (!productElement) {
            console.error("Elemento preço não encontrado")
            return false;
        }

        const productValue = productElement.value;
        if (regexPrice.test(productValue)) {
            alert("Preço válido!");
            return true;
        } else {
            alert("Preço inválido!");
            return false;
        }
}
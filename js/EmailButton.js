function SendMail() {
    if (document.getElementById("mailSubject").value && document.getElementById("mailName").value && document.getElementById("mailEmail").value && document.getElementById("mailMessage").value) {
        var params = {
            subject : document.getElementById("mailSubject").value,
            from_name : document.getElementById("mailName").value,
            email_id : document.getElementById("mailEmail").value,
            message : document.getElementById("mailMessage").value
        }
        
        document.getElementById("mailSubmit").classList.add("valid");
        
        emailjs.send("service_mrdgala","template_5a1i30m", params).then(function (res) {
            document.getElementById("mailSubject").value = "";
            document.getElementById("mailName").value = "";
            document.getElementById("mailEmail").value = "";
            document.getElementById("mailMessage").value = "";
            setTimeout(function () {
                document.getElementById("mailSubmit").classList.remove("valid");
            }, 5000)
        });
    } else {
        alert("Preencha todos os campos para enviar o email!");
    }
}

function nameInput(element) {
    if (! element.checkValidity() && element.value) {
        alert("Seu nome pode conter apenas letras!");
        element.value = "";
    }
}

function mailInput(element) {
    if (! element.checkValidity() && element.value) {
        alert("Insira um email válido!");
        element.value = "";
    }
}
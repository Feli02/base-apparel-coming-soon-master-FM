window.addEventListener('load', function(){

    let inputEmail = document.getElementById('email');
    let iconError = document.getElementById('icon-error');
    let errorText = document.getElementById('text-err');

    inputEmail.addEventListener('blur', () => {
        valor = inputEmail.value
        regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if(!regex.test(valor)){
            iconError.classList.add('error-icon-show');
            errorText.classList.add('error-txt-show');
            inputEmail.classList.add('email-add-border')
        }else{
            iconError.classList.remove('error-icon-show');
            errorText.classList.remove('error-txt-show');
            inputEmail.classList.remove('email-add-border')
        }
    })
    
})
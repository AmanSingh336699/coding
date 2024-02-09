function togglePasswordVisibility(){
    var passwordInput=document.getElementById("password");
    var passwordToggleBtn=document.querySelector('.password-toggle-btn');
    if(passwordInput.type==="password"){
        passwordInput.type='text';
        passwordToggleBtn.innerHTML="<img src='eyeslashicon.jpg' alt='Toggle password visibility' width='24' height='24'>";
    }else{
        passwordInput.type="password";
        passwordToggleBtn.innerHTML="<img src='eyeicon.jpg' alt='Toggle password visibility' width='24' height='24'>";
    }
}
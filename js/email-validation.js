let emailInput = document.getElementById("notf_email");
let emailButton = document.getElementById("notf_button");
let emailTips= document.getElementById("validation_tips");

function EmailVerification(){
  if(emailInput.value !== ""){
    const emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let emailValidation = emailRegEx.test(emailInput.value);
    if(emailValidation){
      emailButton.disabled = false;
      emailTips.innerHTML = "";
    }
    else{
      emailButton.disabled = true;
      emailTips.innerHTML = "Type correct email adress. Example: email@domain.com";
    }
  }
  else{
    emailButton.disabled = true;
    emailTips.innerHTML = "";
  }
}
emailInput.addEventListener("keyup", function(){EmailVerification();});

var emailInput = document.getElementById("notf_email");
var emailButton = document.getElementById("notf_button");
var emailTips= document.getElementById("validation_tips");

function EmailVerification(){
  if(emailInput.value !== ""){
    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailValidation = emailRegEx.test(emailInput.value);
    if(emailValidation){
      emailButton.disabled = false;
    }
    else{
      emailButton.disabled = true;
      emailTips.classList.add("tips_visibility");
    }
  }
  else{
    emailButton.disabled = true;
    emailTips.classList.remove("tips_visibility");
  }
}

emailInput.addEventListener("keyup", function(){EmailVerification();});

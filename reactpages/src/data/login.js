function getUserName() {
	return localStorage.getItem("account") ; 
}


function isLogin(){
	return localStorage.getItem("loginStatus"); 
}


export function addUserNameToWelcome() {
	if (isLogin() && getUserName() !== null) {
		//innialText = document.getElementById("welcome_name_area").innerText;
		document.getElementById("welcome_name_area").innerText = getUserName() + ", welcome to BACO online wine shop!" // + innialText; 
	}
}

function onSubmitLogin() {
    let inputAccount = document.getElementById("account");
    let inputPassword = document.getElementById("password");
    if (inputAccount.value !== undefined && inputPassword.value !== undefined 
        && inputAccount.value !== "" && inputPassword.value !== "") {
          localStorage.setItem("account", inputAccount.value);
          localStorage.setItem("password", inputPassword.value);
		  localStorage.setItem("loginStatus", true);
		  window.location.assign(window.location.origin + "/index.html");
    } else {
      alert("illegal account or password");
      localStorage.setItem("loginStatus", false);
    }
  }

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

function passwordToggleUp(){
    var x = document.getElementById("passwordInput");
    if (x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function passwordToggleIn(){
    var x = document.getElementById("passwordInput2");
    if (x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}

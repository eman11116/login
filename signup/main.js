var signUpName = document.getElementById("signName");
var signUpEmail = document.getElementById("signEmail");
var signUpPass = document.getElementById("signPass");




if (localStorage.getItem("userData")!=null) {
    userData=JSON.parse(localStorage.getItem(userData))
}
else{
    userData=[];
}
var userData=[];
function addData() {
    if (signUpName.value=="" ||signUpEmail.value=="" ||signUpPass.value=="") {
        document.getElementById("massage").innerHTML =`<p class="text-center">inputs is required</p>`
    }
    else{
        var user={
            name:signUpName.value,
            email:signUpEmail.value,
            pass:signUpPass.value
        }
userData.push(user);
location.href='../../login/index2.html'
localStorage.setItem("userData",JSON.stringify(user));
    }
}


















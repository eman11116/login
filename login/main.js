var userData=[];
userData=JSON.parse(localStorage.getItem('userData'))

var signInEmail = document.getElementById("signInEmail");
var signInPass = document.getElementById("signInPass");

document.getElementById("login").addEventListener("click", function () {
    if (signInEmail.value==""||signInPass.value=="") {
        document.getElementById("massage").innerHTML=`<p class="text-center">inputs is required</p>`;
    }
    else{
        checkUser();
    }
})
function checkUser() {
    for ( var i=0;i<userData.length;i++) {
       if (signInEmail.value==userData[i].email && signInPass.value==userData[i].pass) {
        var x =userData[i].name
        localStorage.setItem("userName",x)
        location.href='../../home/index.html';
break;
       }
        
    
    else{
    
        document.getElementById("massage").innerHTML=`<p class="text-center">incorect email or password</p>`;

}
}
}



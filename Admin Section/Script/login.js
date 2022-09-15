document.getElementById("form").addEventListener("submit",loginData)
function loginData(e){
    e.preventDefault();
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let obj={
    email,
    password
}
if(obj.email=="" && obj.password==""){
    alert("please fill this credintial")
    window.location.href="../Html/login.html"

}
else if(obj.email=="eve.holt@reqres.in" && obj.password=="cityslicka"){
    window.location.href="../Html/data.html"
}
else{
    alert("please fill this credintial")
    window.location.href="../Html/login.html"

}
}
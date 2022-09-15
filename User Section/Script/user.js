
let url ="https://jsonserverapii.herokuapp.com/api/users"
document.getElementById("form").addEventListener("submit",postData)
function postData(e){
    e.preventDefault();
let name=document.querySelector("#name").value;
let age = document.querySelector("#age").value;
let place = document.querySelector("#place").value;
let batch_name = document.querySelector("#batch_name").value;
let profession = document.querySelector("#profession").value;
obj={
    name,
    age,place,
    batch_name,
    profession
}
// console.log("obj",obj)
    fetch(url,{
method:"POST",
body:JSON.stringify(obj),
headers:{"content-type":"application/json"}
    }).then(res=>{getData(),alert("successfully registered")}).catch((err)=>alert("err",err))
    // alert("Thank You");
    window.location.href="../../Admin Section/Html/login.html"
}

postData();

function getData(){
    fetch(url)
    .then((res)=>res.json())
.then((res)=>console.log(res))
}
getData()
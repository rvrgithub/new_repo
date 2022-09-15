let arr=[]
var s= 0;
var t=0;
let url = "https://jsonserverapii.herokuapp.com/api/users";
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  arr = data;
//   console.log("arr", arr);
  fetchData(arr);
}
getData();
function fetchData(data){
    let tbody = document.querySelector("tbody")
    tbody.innerHTML="";
    data.map((e)=>{
        if(e.profession==="students"){
            s++;
        }else{
            t++
        }
        tbody.innerHTML += `<tr>
        <td><img src="https://picsum.photos/200/300?random=${e.id}" "alt="ImgeError"></td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.place}</td>
        <td>${e.batch_name}</td>
        <td>${e.profession}</td>
    </tr>`
    })
    let guests = document.getElementById("guests");
guests.innerHTML=`${data.length}`

    let students = document.getElementById("students");
    students.innerHTML=`${s}`

    let working = document.getElementById("working");
    working.innerHTML=`${t}`
// console.log("s",s,t)
}


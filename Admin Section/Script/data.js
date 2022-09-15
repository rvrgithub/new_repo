console.log("data page");
let arr = [];
let sort ;
let filterValue;


// ............ sortFunciton ........... //

function sortFun() {
    sort = document.querySelector("#sorting").value;
    // console.log("sort",sort)
    if(sort ==""){
    fetchData(arr)
    }
else if(sort == "asc"){
    arr.sort((a,b)=>{
        return a.age -b.age
    })
    fetchData(arr)
 }else{
    arr.sort((a,b)=>{
        return b.age -a.age
    });
    fetchData(arr)
 }
  }
  sortFun()


  
// ............... filter funciton ............ //

function filterFun() {
    // console.log("arrasfdasf", arr);
   filterValue = document.querySelector("#filter").value;
    // console.log("filter", filterValue);
    if(filterValue==""){
    fetchData(arr);
    }
    else{
        let newFilterValue = arr.filter((e) => e.batch_name === filterValue);
        fetchData(newFilterValue);
    }
      }
  filterFun();


let url = "https://jsonserverapii.herokuapp.com/api/users";
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  arr = data;
//   console.log("arr", arr);
  fetchData(arr);
}
// console.log("arrrr", arr);
getData();



function fetchData(data) {
  let dataDiv = document.querySelector("#dataContainer");
  dataDiv.innerHTML = "";
//   console.log("dataaaa", data);
  data.map((e) => {
    dataDiv.innerHTML += `
<div>
<img src="https://picsum.photos/200/300?random=${e.id}"" alt="ImgeError">
<p><span>Name:- </span>${e.name}</p>
<p><span>Age:- </span>${e.age}</p>
<p><span>Place:- </span>${e.place}</p>
<p><span>Batch no:- </span>${e.batch_name}</p>
<p><span>profession:- </span>${e.profession}</p>
<div class= "flex">
<i class="fa fa-edit" onClick="editFun(${e.id})"></i>
<i class="fa fa-trash" onClick="deleteFun(${e.id})"></i>
</div>
</div>
`;
  });
}


// ............... delete fucntion ........ ///

function deleteFun(id){
// console.log("id",id)
fetch(url+`/${id}`,{
    "method":"DELETE"
}).then((res)=>fetchData())
}

//........... edit funciton .................
// function editFun(e){
//     console.log("e",e);
//     fetch(url,`/${e}`)
//     .then((res)=>res.json())
//     .then((res)=>{
//     })
// }
// ....search function .......

function SearchInput(){
  let search = document.querySelector("#search").value;
  // console.log("search" ,search);
  let searchName = arr.filter((e)=> e.name ===  search);
  fetchData(searchName)
}
SearchInput();


document.querySelector("#right").addEventListener("click",()=>{
  window.location.href="../Html/report.html"
})
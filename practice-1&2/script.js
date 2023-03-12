

const Button1 =()=>{
  localStorage.setItem('name','Sakib Khan')
}
const Button2=()=>{
  localStorage.setItem('Age','40')
}

const getnameage =()=>{
  const Name = localStorage.getItem('name')
  const Age = localStorage.getItem('Age')
  console.log(`Name:${Name} & Age: ${Age}`)
}

const removenameage =()=>{
  localStorage.removeItem("name");
  localStorage.removeItem("age");
}

const setobj =()=>{
  let obj = {
    firstName: 'Abraham',
    lastName:'Lincon'
  }
  let objstringify = JSON.stringify(obj);
  localStorage.setItem('Nayok', objstringify)
}
 const getobj =()=>{
  const get = localStorage.getItem('Nayok');
  const getObj =JSON.parse(get);
  console.log(getObj.firstName)
  console.log(getObj.lastName)
 }
 const clearLocalStorage = () => {
  console.log('Clear everthing from local storage')
  localStorage.clear();
};

// function clearLocalStorage() {
//   console.log('Clear everthing from local storage')
//   localStorage.clear();
// }
// -------------------------------------------------------------
  // ---------------------------------------///////////

// check-list 1
// const input= prompt("please input number");
// const newInput=parseInt(input)+Number(200);
// alert(newInput)

// check-list 2

// const  webLocation = confirm("Do you want see the location address?")
// if (webLocation==true){
//     console.log(location.href='https://www.programming-hero.com/')
// }else{
//     console.log('location address is not correct')
// }
// practice task-level 2 count problem

// const button = document.getElementById("click-btn")
// let i = 1;
// function buttonClick() {
    
//  document.getElementById('count').innerHTML=i;
  
//      i ++;
// }
// Another way
const button = document.getElementById("click-btn");
const count = document.getElementById("count");

button.addEventListener("click", function() {
  let currentCount = parseInt(count.textContent);
  let newCount = currentCount + 1;
  count.textContent = newCount;
  localStorage.setItem("count", newCount);
});

window.addEventListener("load", function() {
  let storedCount = localStorage.getItem("count");
  if (storedCount !== null) {
    count.textContent = storedCount;
  }
});

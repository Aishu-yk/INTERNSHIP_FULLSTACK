//Template backticks
var s='hello';
console.log(`${s}`);

// Type operator in js
console.log(typeof s);

//Ternary operator
let age =19;
let res=age>=18 ? "no" : "yes";
console.log(res); 

//For loop
for(let i=0;i<5;i++){
  console.log(i);
}

//or 
//let and var both can be use to iniatalize (but when u use let ensure that the variable is not defined before)
var i=0;      
for ( ;i<5;i++){
  console.log(i);
}

//or 

var i=0;
for ( ;i<5; ){
  console.log(i);
  i++;
}

//FOR IN
const arr=[54,24,12,42,32];
for (let x in arr){
  console.log(arr[x]);
}

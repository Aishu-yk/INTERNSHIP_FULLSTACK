//ARROW FUNCTION
const add=(a,b) => a+b;
console.log(add(2,3));


//Object
const person={
    name:'aishu',
    age:19
}
console.log(person);
console.log(person.name);


//MAP
//Creating a map
const fruit=new Map([
    ['apple',400],
    ['mango',200]
])
console.log(fruit);
//MAP METHODS
//Map.get() method
console.log(fruit.get('apple'));

//Map.set() method
fruit.set("orange",500);

//Map.size 
console.log(fruit.size);

//typeof Map
console.log(typeof fruit);

//Map.delete() method
fruit.delete('apple');
console.log(fruit);

//Map.entries() method 
for (const[key,value] of fruit.entries()){
    console.log(`${key} : ${value}`);
}


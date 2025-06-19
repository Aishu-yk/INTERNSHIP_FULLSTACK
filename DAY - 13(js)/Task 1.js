let arr = ["Apple","Banana","Mango","Cherry","Guva"];
console.log("Original Array : ", arr);

// Create an array of 5 fruits and print the third one
console.log("Third element in the Array : ", arr[2]);

//Add an element at the end using push()
arr.push("Berry");

//Remove the element at the end using shift()
arr.shift();

//Print the length of the array
console.log("Length of the array : ", arr.length);

//Loop throught an array and print each item
console.log("Elements in Array : ");
arr.forEach(element => console.log(element));

//Reverse an array
arr.reverse();
console.log("Reversed Array : ",arr);

//Find the sum of numbers in an array
let arr2 = [1,4,2,5,3];
let sum = 0;
arr2.forEach(item => sum+=item);
console.log("Sum of the Array : ", sum);





// output

// Third element in the Array : Mango
// Length of the array :  5
// Elements in Array :
//  Banana
//  Mango
//  Cherry
//  Guva
//  Berry
// Reversed Array : ['Berry', 'Guva', 'Cherry', 'Mango', 'Banana']
// Sum of the Array : 15
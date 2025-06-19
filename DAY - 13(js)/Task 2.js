const arr1 = [89,19,20];
const arr2 = [35,18,37];
console.log("Array 1 : ", arr1, "\nArray 2 : ", arr2);

//Merge two array using concat()
let mrg = arr1.concat(arr2);
console.log("Merged array : ", mrg); 

//Use splice() to remove 2 elements from the middle
mrg.splice(2,2);
console.log("Removes the middle 2 element : ", mrg);

//Sort a numeric array
mrg.sort((a,b) => a - b);
console.log("Sorted array : ", mrg);

//check if an array includes item - 18
console.log("Is the array Includes item - 18 : ", mrg.includes(18)); //can also use search()-but it only works for string

//Find the index of an element
console.log("Index of item - 19 : ", mrg.indexOf(19)); // can also use findIndex()
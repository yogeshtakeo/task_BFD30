
function folderStructure(){
     // Transform Array using map()
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Array Destructuring
const values = [1, 2, 3, 4, 5];
const [firstValue, ,thirdValue] = values;
console.log(firstValue, thirdValue);

// Rest Parameter
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Object Destructuring
const person = {
  name: 'Jharana',
  age: 26,
  location: 'Cupertino',
};
const { name, location } = person;
console.log(name, location);

// Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6,7];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

const clonedArray = [...array1];
console.log(clonedArray);
  
}

export default folderStructure
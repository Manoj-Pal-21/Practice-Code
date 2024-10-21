/* find the second largest odd num in array with foreEach*/

// const array = [2, 4, 5, 4, 6, 4, 7, 8, 6, 5, 6, 7];

// const removeDuplicatesAndFilterOdd = (data) => {
//     let uniqueArray = [];
//     let oddArray = [];
//     data.forEach(item => {
//         if (!uniqueArray.includes(item)) {
//             uniqueArray.push(item);
//         }
//     });
//     uniqueArray.forEach(item => {
//         if (item % 2 !== 0) {
//             oddArray.push(item);
//         }
//     });
//     return oddArray;
// };

// console.log(removeDuplicatesAndFilterOdd(array));




/* find the second largest odd num in array */

// const array = [2, 4, 5, 4, 6, 4, 7, 8, 6, 5, 6, 7];

// const removeDuplicatesAndFilterOdd = (data) => {
//     let uniqueArray = [];
//     let oddArray = [];

//     for (let i = 0; i < data.length; i++) {
//         if (!uniqueArray.includes(data[i])) {
//             uniqueArray.push(data[i]);
//         }
//     }

//     for (let i = 0; i < uniqueArray.length; i++) {
//         if (uniqueArray[i] % 2 !== 0) {
//             oddArray.push(uniqueArray[i]);
//         }
//     }

//     return oddArray;
// };

// console.log(removeDuplicatesAndFilterOdd(array)[0]);





/* find the unique odd num in array */

// const array = [2, 4, 5, 4, 6, 4, 7, 8, 6, 5, 6, 7];

// const removeDuplicates = (data) => {
//     return data.filter((items, index) => data.indexOf(items) === index && items % 2 !== 0);
// };

// console.log(removeDuplicates(array));




/* remove the dubilcates in array */

// const array = ["e", "e", "r", "y", "u", "y", "k", "m", "c", "k", "u", "e"];

// const removeDuplicates = (data) => {
//     return data.filter((items, index) => data.indexOf(items) === index)
// };

// console.log(removeDuplicates(array));




/* remove the dubilcates in array using reduce */


// const array = ["e", "e", "r", "y", "u", "y", "k", "m", "c", "k", "u", "e"];

// const removeDuplicates = (data) => {
//     return data.reduce((accumulator, currentValue) => {
//         if (!accumulator.includes(currentValue)) {
//             accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []);
// };

// console.log(removeDuplicates(array));




/* remove the dubilcates in array using reduce */

// const array = [1, 5, 20, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];

// const removeDuplicatesAndPickOdds = (data) => {
//     return data.reduce((accumulator, currentValue) => {
//         if (!accumulator.includes(currentValue) && currentValue % 2 !== 0) {
//             accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []);
// };

// console.log(removeDuplicatesAndPickOdds(array));




/* flatend array */

// const array = [[2, 4], [6, 4], [6, 5]]

// const flatArray = (arr, n) => {
//     if (n === 0) return arr;
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             res.push(arr[i]);
//         } else {
//             res.push(...flatArray(arr[i], n - 1))
//         }
//     }
//     return res

// };

// const result = flatArray(array, 1);
// console.log(result)





/* find the larget count of String */

// const str = 'ajdk ajfhgk djfkfhfbdj jdjfh jdkdhdkjk jfjdhj';

// const getLargestString = (str) => {
//     const res = str.split(' ');
//     let maxLength = 0;
//     let index;

//     for (let i = 0; i < res.length; i++) {
//         if (res[i].length > maxLength) {
//             maxLength = res[i].length;
//             index = i;
//         }
//     }

//     return { length: maxLength, index: index };
// };

// const result = getLargestString(str);
// console.log(result);




/* secondLargestNumber in array with sort */

// const largestNumber = (num) => [...new Set(num)].sort((a, b) => b - a)[1];

// const array = [2, 4, 5, 6, 7, 4, 3, 9];
// const secondLargestNumber = largestNumber(array);
// console.log(secondLargestNumber);




/* find the second largest num in array*/

// const secondLargestNumber = (num) => {
//     let largest = [];
//     let secondLargest = [];

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > largest) {
//             secondLargest = largest;
//             largest = num[i];
//         } else if (num[i] > secondLargest && num[i] != largest) {
//             secondLargest = num[i];
//         }
//     }

//     return secondLargest;
// }
// const arr = [0, 0, 2, 3, 5, 6, 6, 4, 5, 2, 9, 3, 10, 9]
// console.log(secondLargestNumber(arr))





/* find the largest num in array*/

// const largestNumber = (arr) => {

//     let largest = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const arr = [3, 5, 7, 2, 8, 6, 1];
// console.log(largestNumber(arr));






/* find the second largest odd num in array with filter*/

// const arr = [0, 0, 2, 3, 5, 6, 6, 4, 5, 2, 9, 3, 9]

// const second_largest_odd = () => {
//     let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
//     let oddNum = uniqueArr.filter((item) => item % 2 !== 0);
//     console.log(oddNum[1]);
// };

// second_largest_odd();




/* flatarray with reduce methods*/

// function flattenArray(arr) {
//   return arr.reduce((acc, val) =>
//   Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }

// const nestedArray = [1, 2, 3, [1, 2], 6, 7, [8, 9]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);





/* flatarray with inbuild methods*/


// function flattenArray(arr) {
//   return arr.flatMap(item => Array.isArray(item) ? flattenArray(item) : item);
// }

// const nestedArray = [1, 2, 3, [1, 2], 6, 7, [8, 9]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);




/* factorial number */

// const num = 5;

// function findFactorial(num) {
//     if (num === 1 || num === 0) {
//         return 1
//     }

//     const res = num * findFactorial(num - 1);
//     return res
// }

// console.log(findFactorial(num));

// Using Callbacks

// function someAsyncFunction(param, callback) {
//     if (param !== 'example') {
//         callback(null, 'Success');
//     } else {
//         callback('Error occurred', null);
//     }
// }

// function doSomethingAsync(param, callback) {
//     someAsyncFunction(param, callback);
// }


// doSomethingAsync('example', (error, result) => {
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('Success:', result);
//     }
// });

// async await

// async function someAsyncFunction(param) {
//     return new Promise((resolve, reject) => {
//         if (param !== 'example') {
//             resolve('Success');
//         } else {
//             reject('Error occurred');
//         }
//     });
// }

// async function doSomethingAsync(param) {
//     try {
//         const result = await someAsyncFunction(param);
//         console.log('Success:', result);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }


// doSomethingAsync('example');


// promises

// function someAsyncFunction(param) {
//     return new Promise((resolve, reject) => {
//         if (param !== 'example') {
//             resolve('Success');
//         } else {
//             reject('Error occurred');
//         }
//     });
// }

// function doSomethingAsync(param) {
//     return someAsyncFunction(param);
// }

// doSomethingAsync('example')
//     .then(result => console.log('Success:', result))
//     .catch(error => console.log('Error:', error));



// function someAsyncFunction(param) {
//     return new Promise((resolve, reject) => {
//         if (param === 'example') {
//             resolve('Success');
//         } else {
//             reject('Error occurred');
//         }
//     });
// }


// someAsyncFunction('example')
//     .then(result => console.log('Success:', result))
//     .catch(error => console.log('Error:', error));



// sorting

// const arr = [5, 5, 5, 7, 8, 3, 21];
// let newArray
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             newArray = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = newArray
//         }
//     }
// }

// console.log([...new Set(arr)])




// insert element

// const arr = [5, 7, 8, 3, 21];
// let position = 1
// let newEle = 6
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         arr[i + 1] = arr[i]
//         if (i == position) {
//             arr[i] = newEle
//         }
//     }
// }

// console.log(arr)




// deleting

// const arr = [5, 7, 8, 3, 21];
// let position = 2

// for (let i = position; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1]
//     arr.length = arr.length - 1
// }

// console.log(arr)





// serching

// const arr = [5, 7, 8, 3, 21];
// let Ele = 8
// let index

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === Ele) {
//         index = i;
//         break;
//     }
// }

// console.log(index)
// console.log(arr.indexOf(Ele))




// merge

// const arr1 = [5, 7, 8, 3, 21];
// const arr2 = [76, 57, 97, 0, 1];
// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i]
// }
// for (let i = 0; i < arr2.length; i++) {
//     arr3[arr1.length + i] = arr2[i]
// }

// another way
// const arr3 = [...arr1, ...arr2]

// console.log(arr3)


// shallow copy


// const obj1 = {
//     name: "manoj"
// }

// const obj2 = obj1
// obj2.name = 'aadarsh'
// console.log(obj2, obj1)


// deep copy


// const obj1 = {
//     name: "manoj",
//     address:{
//         state:'maharashtra',
//         city:'mumbai'
//     }
// }

// const obj2 = { ...obj1 }
// const obj2 = Object.assign({},obj1)
// const obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.address.state = 'andrapradesh'
// console.log(obj2, obj1)
// Using JSON.parse(JSON.stringify(obj1)) creates a deep copy of obj1, but it does not handle functions or special object types
// (e.g., Date, RegExp). For a true deep copy, including handling functions, use lodash's _.cloneDeep(obj1).
// For example, after cloning, you can modify properties of the new object without affecting the original:
// Another way to create a deep copy of an object is by using the lodash package with the _.cloneDeep method.
// obj2.address.state = 'andrapradesh';
// obj2.name = 'aadarsh'
// console.log(obj2, obj1)


// const obj1 = {
//   name: 'manoj',
//   address: {
//     city: 'ulhasnagar',
//     state: 'MH',
//   },
//   getGreeting: function() {
//     return `Hello, ${this.name}!`;
//   },
// };

// const obj2 = structuredClone(obj1);

// obj2.address.state = 'AP';

// console.log(obj1.address.state);
// console.log(obj2.address.state);
// console.log(obj1.getGreeting());

// call apply & bind Exp
// const obj = {
//     name: 'manoj'
// };

// const greeting = function (a, b) {
//     return `${a} ${this.name} ${b}`
// }
// console.log(greeting.call(obj, "Hello", "How are U"))
// console.log(greeting.apply(obj, ["Hello", "How are U"]))
// const result = greeting.bind(obj)
// console.log(result("Hello", "How are U"))


// curring

// const abc = (a) => (b) => (c) => {
//     return a + b + c; 
// }

// const result = abc(1)(2)(3); 
// console.log(result);

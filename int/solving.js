const data = [3, 0, 4, 6, 7, 5, 8, 9, 3, 4, 6, 9, 11, 10];
const str = 'ajdk ajfhgk djfkfhfbdj jdjfh jdkdhdkjk jfjdhj';
const array = [[2, 4], [6, 4], [6, 5]]

// let largest = []
// let secondLargest = []

// data.forEach(item => {
//     if (item % 2 !== 0) {
//         if (item > largest) {
//             secondLargest = largest;
//             largest = item;
//         } else if (item > secondLargest && item !== largest) {
//             secondLargest = item;
//         }
//     }
// }
// );

// console.log('Second Largest Odd Number:', secondLargest);
// console.log('Largest Odd Number:', largest);


////////////////////////////////////////////////////

// let unique = []

// data.forEach(item => {
//     if(!unique.includes(item)){
//         unique.push(item)
//     }
// })

// console.log("Unique Number :", unique)

////////////////////////////////////////////////////

// let string = str.split(' ')
// let maxLength = 0;
// let index;

// string.forEach(item => {
//     if (item.length > maxLength) {
//         maxLength = item.length
//         index = item
//     }
// })

// console.log("length :", maxLength, index)

////////////////////////////////////////////////////

// let n = 1

// const flatArray = (data, n) => {
//     if (n === 0) return data;
//     let res = []
//     data.forEach(item => {
//         if (typeof item === 'number') {
//             res.push(item)
//         } else {
//             res.push(...flatArray(item, n - 1))
//         }
//     })
//     return res
// }

// const result = flatArray(array, n)
// console.log(result)

////////////////////////////////////////////////////

// let num = 5
// let res

// const findFactorial = (num) => {
//     if (num === 0 || num === 1) return 1
//     res = findFactorial(num - 1)
//     return res
// }
// const result = findFactorial(num)
// console.log(result)

////////////////////////////////////////////////////

// let newArray
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//         if (data[j] > data[j + 1]) {
//             newArray = data[j]
//             data[j] = data[j + 1]
//             data[j + 1] = newArray
//         }
//     }
// }

// console.log([...new Set(data)])


////////////////////////////////////////////////////


// let smallestNum = Infinity;

// data.forEach(item => {
//     if (item > 0 && item < smallestNum) {
//         smallestNum = item;
//     }
// });

// if (smallestNum === Infinity) {
//     console.log("No positive numbers in the array");
// } else {
//     console.log(smallestNum);
// }

////////////////////////////////////////////////////

// let uniqueArray = [];

// for (let i = 0; i < data.length; i++) {
//     if (!uniqueArray.includes(data[i])) {
//         uniqueArray.push(data[i]);
//     }
// }

// for (let i = 0; i < uniqueArray.length; i++) {
//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (uniqueArray[j] > uniqueArray[j + 1]) {
//             let temp = uniqueArray[j];
//             uniqueArray[j] = uniqueArray[j + 1];
//             uniqueArray[j + 1] = temp;
//         }
//     }
// }

// console.log(uniqueArray);

////////////////////////////////////////////////////

// let reversedArray = [];

// for (let i = data.length - 1; i >= 0; i--) {
//     reversedArray.push(data[i]); 
// }

// console.log(reversedArray);

// let reversedArray = new Array(data.length); 

// for (let i = 0; i < data.length; i++) {
//     reversedArray[i] = data[data.length - 1 - i]; 
// }

// console.log(reversedArray);


////////////////////////////////////////////////////

// const arr1 = [5, 7, 8, 3, 21];
// const arr2 = [76, 57, 97, 0, 1];
// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr3[i] = arr1[i]
// }

// for (let i = 0; i < arr2.length; i++) {
//     arr3[arr1.length + i] = arr2[i]
// }

// console.log(arr3)

////////////////////////////////////////////////////

// const arr1 = [5, 7, 8, 3, 21];
// let position = 3
// let element = 10

// for (let i = arr1.length - 1; i >= 0; i--) {
//     if (i >= position) {
//         arr1[i + 1] = arr1[i]
//         if(i === position){
//             arr1[i] = element
//         }
//     }
// }

// console.log(arr1)

////////////////////////////////////////////////////

// const arr1 = [5, 7, 8, 3, 21];
// let position = 3

// for(let i = position; i < arr1.length - 1; i++){
//     arr1[i] = arr1[i + 1]
//     arr1.length = arr1.length - 1
// }

// console.log(arr1)

////////////////////////////////////////////////////

// const arr1 = [5, 7, 8, 3, 21];
// let position = 7
// let index

// for(i = 0; i < arr1.length; i++){
//     if(arr1[i] === position){
//         index = i
//         break;
//     }
// }

// console.log(index)

////////////////////////////////////////////////////

// const filterData = data.filter(item => item === 7 || item === 5);
// console.log(filterData)

////////////////////////////////////////////////////


// let sum = 0

//  for(let i = 0; i < data.length; i += 2){
//     sum += data[i]
//  }

//  console.log(sum)
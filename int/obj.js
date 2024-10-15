// const user = {
//     name: 'Raj',
//     location: {
//         city: 'NY',
//         state: 'NY'
//     }
// };

// let user2 = JSON.parse(JSON.stringify(user));
// user2.location.zipcode = 346229
// user.location.zipcode = 346229
// console.log(user2)

////////////////////////////////////////////////

// var a = 30;
// let b = a + 20;
// let a = 25;
// console.log(a + b);

///////////////////////////////////////////////

// let a = 12

// --a
// console.log(a++);
// console.log(a)

///////////////////////////////////////////////

// function generateSeries(length) {
//     let series = [];
//     let decreasing = 12; 
//     let increasing = 11;  
//     for (let i = 0; i < length; i++) {
//         if (i % 2 === 0) {
//             series.push(decreasing);
//             decreasing++; 
//         } else {
//             series.push(increasing);
//             increasing++; 
//         }
//     }

//     return series;
// }

// const series = generateSeries(8);
// console.log(series);


// function generateSeries(length) {
//     const series = [];
//     let current = 12;

//     for (let i = 0; i < length; i++) {
//         series.push(current);
//         if (i % 2 === 0) {
//             current -= 1; 
//         } else {
//             current += 2; 
//         }
//     }

//     return series;
// }

// const result = generateSeries(8);
// console.log(result); 


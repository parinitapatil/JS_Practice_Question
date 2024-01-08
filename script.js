// //  #1 : Print numbers from 1 ro 10 ✅
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// //  Coding challenge #2: Print the odd numbers less than 100 ✅
// // num%2==0    even  , else odd

// for (let i = 0; i <= 100; i++){
//     if(i%2!=0) console.log(i)
// }

// // Coding challenge #3: Print the multiplication table with 7✅
// // num * i = peoduct
// let num = 7;
// for (let i = 1; i <= 10; i++){
//     console.log(num+" x "+ i +" = "+num*i)
// }

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10✅
// for (let i = 1; i <= 10; i++){
//     for (let j = 1; j <= 10; j++)
//     console.log(`${i}x${j}=${i*j}`)
// }

// Coding challenge #5: Calculate the sum of numbers from 1 to 10✅
// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     console.log(sum+=i)
// }

// Coding challenge #6: Calculate 10!✅
// let init = 1;
// for (let i = 1; i <= 10; i++){
//     init*=i

// }
// console.log(init);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30✅
// sum=0 > if n%2!=0
// let sum = 0;
// for (let i = 11; i <= 30; i++){
//     if (i % 2 != 0)
//     sum += i;
// }
// console.log(sum)

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit✅
// function celToFer(Temperatue) {

//     // formula: °F = °C × (9/5) + 32
//     return((Temperatue * (9/5) + 32))
// }
// console.log(celToFer(20)+" °F");

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius✅
// function ferTocel(Temperatue) {
//     // Formula: C = 5/9(F-32)
//     return(5/9 * (Temperatue-32))
// }
// console.log(ferTocel(98.6) + " °C");

// Coding challenge #10: Calculate the sum of numbers in an array of numbers✅
// function sumOfarray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum = sum + arr[i];
//     return(sum)
// }
// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// console.log(sumOfarray(arr))

// Coding challenge #11: Calculate the average of the numbers in an array of numbers✅
// function avgOfarray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum += arr[i];
//     let Avg = sum / arr.length
//     return(Avg)
// }

// let arr = [1, 3, 9, 15, 90];
// console.log(avgOfarray(arr))

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers✅
// function arrOfPositiveNum(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] >= 0) {
//             newArray.push(arr[i]);
//         }
//     return newArray
// }

// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// console.log(arrOfPositiveNum(arr))

// Coding challenge #13: Find the maximum number in an array of numbers✅
// function maxNumInArray(arr) {
//     let sortArray = arr.sort();
//     sortArray[sortArray.length-1]
//     return sortArray[sortArray.length - 1];
    
// }
// let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// console.log(maxNumInArray(arr))

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion✅
//     let f0 = 0;
//     let f1 = 1;
// for (let i = 0; i <= 10; i++) {
//         console.log(f0);
//         let fi = f0 + f1;

//         f0 = f1;
//         f1 = fi;
//     }

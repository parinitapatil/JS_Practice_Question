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



// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion✅
// n is the input
// function FibonacciRecursive(n) {
//     if (n <= 0) return "Input Should be positive";
//     else if (n === 1) return 0;
//     else if (n === 2) return 1;
//     else return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
// }
// console.log(FibonacciRecursive(6))

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime✅
// function checkPrime(num) {
//     // for Boolean result will either True or False
//     if (num < 2) return false;
//     else if (num == 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if (num % i == 0) return false;
//     }
//     return true;
    
// }
// console.log(checkPrime(9))

// Coding challenge #17: Calculate the sum of digits of a positive integer number✅

// function sumOfDigits(num) {
//     let sum = 0;
//     let n = num.toString();

//     for (let char of n) {
//         let digit = parseInt(char);
//         sum += digit;
//     }
//     return sum;
// }
// console.log(sumOfDigits(12345))

// Coding challenge #18: Print the first 100 prime numbers✅
// function checkPrime(num) {
//     if (num == 1 || num == 0) return false;
//     for (let i = 2; i < num; i++){
//         if (num % i == 0) return false;
//     }
//     return true;
// }

// let n = 100;
// let result = [];
// for (let i = 1; i <= n; i++){
//     if (checkPrime(i)) {
//         result.push(i);
//     }
// }
// console.log(result.join(' '))

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"✅
// function checkPrime(num) {
//     if (num == 1 || num == 0) return false;
//     for (let i = 2; i < num; i++){
//         if(num%i==0) return false
//     }
//     return true
// }


// function greaterPrime(startAt, nPrimes) {
//     let result = [];
//     for (let i = startAt; result.length < nPrimes; i++){
//         if (checkPrime(i)) {
//             result.push(i)
//         }
//     }
//     return result;
// }

// console.log(greaterPrime(10, 100));

// Coding challenge #20: Rotate an array to the left 1 position✅
// function shiftPosition(arr) {
//     let firstElement = arr.shift();  //here we have removed 3 form the array by shift method, now the array is [4,5,6]
//     arr.push(firstElement) //since we want all elements in array therefore we pushed the first element 3 back in the array because of this the element will grab the last index in array , the resultant array is [4,5,6,3]
//     return arr;
// }
// console.log(shiftPosition([3,4,5,6]));

// Coding challenge #21: Rotate an array to the right 1 position✅
// function rotatArrayRight(arr) {
//     // same concept as above with a slight diffrence
//     let lastElement = arr.pop(); //we removed last element first, resultant array [3,4,5]
//     arr.unshift(lastElement) //to shift the 6 to first  position we will use unshift method it adds lastElement to the first, its opposite of shift method
//     return arr;
// }
// console.log(rotatArrayRight([3,4,5,6]))

// Coding challenge #22: Reverse an array✅
// function reverseArray(arr) {
//     arr.reverse();
//     return arr
// }
// console.log(reverseArray([1,2,3,4,5]))

// Coding challenge #23: Reverse a string✅
// function reverseString(str) {
//     let arr1 = str.split('');
//     let reverseArray = arr1.reverse();
//     return reverseArray.join('');
// }
// console.log(reverseString('hello'))

// Coding challenge #22: Reverse an array ✅
// function reverseArray(arr) {
//     let newArray = [];
//     for (let i = arr.length-1; i>=0; i--){
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(reverseArray([1,2,3,4,5]))

// Coding challenge #23: Reverse a string✅

// function reverseString(str) {
//     let arr = str.split('');
//     let reverseString = arr.reverse();
//     return reverseString.join('');
// }
// console.log(reverseString('Hello⛄'))

// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array✅
// function mergeTwoArray(arr1, arr2) {
//     let newArray = [];
//     for (let i = 0; i < (arr1.length + arr2.length); i++){
//         if(i<arr1.length) newArray.push(arr1[i])
//         if(i<arr2.length) newArray.push(arr2[i])
//     }
//     return newArray;
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(mergeTwoArray(arr1, arr2))

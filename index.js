//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
console.log(ages);
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log ("Subtracting the last element of the array by the first element of the array = ", ages[ages.length-1] - ages[0]);
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
console.log(ages.push(35));
console.log("subtracting the last element of the array by the first element of the array with the new age value added =", ages[ages.length-1] - ages[0]);
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let total = 0;
for(let i = 0; i < ages.length; i++) {
    total = (total + ages[i])
}
console.log("Average age of the array= ", total/ages.length);
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let total1 = 0;
for(i=0;i < names.length;i++) {
     total1 = total1 + names[i].length;
}
console.log("Average letters per name in the array= ", total1/names.length);
//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names);
let concatenatedNames = "";
console.log(concatenatedNames);
for(let i = 0; i < names.length; i++) {
    console.log("name= ", names[i]);
    concatenatedNames = concatenatedNames + names[i] + " ";
}
console.log("concat names= ", concatenatedNames);
//3.	How do you access the last element of any array?
//let array = []
//console.log(array[array.length-1])
//4.	How do you access the first element of any array?
//let array = []
//console.log(array[0])
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
console.log(nameLengths);
for(let i=0;i<names.length;i++) {
    console.log("name ", names[i]);
    console.log("letter count= ", names[i].length);
    nameLengths.push(names[i].length);
}
console.log("pushed sum of letters of each name to NameLengths= ", nameLengths);
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let total2 = 0;
for(let i=0;i<nameLengths.length;i++) {
    console.log("nameLength: ", nameLengths[i]);
    total2 = total2 + nameLengths[i];
}
console.log("sum of nameLengths array= ", total2);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let someFunction = (word,n) => {
    let result = "";
    for(let i = 0;i<n;i++) {
        result += word;
    }
    return result;
};
console.log(someFunction("Hello",3));
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
let createFullName = (firstName,lastName) => `${firstName} ${lastName}`;
console.log(createFullName("Ruben", "Delacruz"));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myNumbers = [100,50,200,80,120,60];
function sumArray(array) {
    let sum = 0;
    for(let i=0;i<array.length;i++) {
        console.log("Printed Number: ", array[i]);
        sum = sum + array[i];
    }
        console.log("sum of all numbers in array", sum);
        if(sum > 100) {
            return true;
        } else{
            return false;
        }
    }
    console.log(sumArray(myNumbers));
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let arr = [1,2,3,4,5];
function average(arr) {
    sum = 0;
    for(i=0;i<arr.length;i++) {
        sum = sum + arr[i];
    }
    return(sum/arr.length);
}
console.log(average(arr));
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let arr1 = [100,200,300,400];
let arr2 = [0,100,20,10,30];
function sumArray1(array1,array2) {
    let sum1 = 0;
    for(let i = 0; i < arr1.length;i++) {
        console.log("Printed Number: ",arr1[i]);
        sum1 = sum1 + arr1[i];
    }
    console.log("summ of all the numbers in arr1: ", sum1);
    let sum2 = 0;
    for(let i=0;i<arr2.length;i++) {
        console.log("Printed Number: ",arr2[i]);
        sum2 = sum2 + arr2[i];
    }
    console.log("sum of all numbers in arr2: ", sum2);
    if(sum1 > sum2) {
        return "arr1 is greater than arr2"
    } else {
        return "arr2 is greater than arr1"
    }
}
console.log(sumArray1(arr1,arr2));
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket) {
    if((isHotOutside) && (moneyInPocket > 25)) {
        return true;
    }
    else {
       return false; 
    }
}
// I will initialize value
let isHotOutside = false;
let moneyInPocket = 40;
console.log("I can buy drink: ", willBuyDrink(isHotOutside,moneyInPocket));
//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function willBlowColdAir(temperature) {
    if(temperature > 78) {
        return "Turn on AC";
    } else {
        return "keep AC turned off";
    }
}
//initialize function
let temperature = 68;
console.log(willBlowColdAir(temperature));
//the function determines when to turn on the ac depending on what the temperature is. Any number above 78 will activate the ac unit 
//while anything below 78 will keep the ac turned off
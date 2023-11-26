"use strict";

// Ex: 1



// Ex: 2

let array1 = [ "hello1", 14,24, "hello2" ]

let newArray1 = array1.filter ( (item) => typeof item == "numbers") ;

console.log(newArray1);

// Ex: 3

let array2 = [14, 150, "css", null, "javascript", 25];

let newarray2 = array2.map(function (x) {
  return x;
});

// Ex: 4

let info = "Good day";
let newInfo = info.slice();

// Ex: 5
// Ex: 6
// Ex: 7

let link = "https://google.com";

// Ex: 8

// let fruits = [ "apple", "mango", "avocado", "kiwi" ]

// fruits.splice(-2,1, "strawberry");
// console.log(fruits);

// Ex: 9

// let array9 = [5, 25, 89, 120, 36,];

// array9.push( "javascript", "python" );

// array9.unshift ("html", "css");
// console.log(array9);

// array9.shift();
// array9.pop();

// console.log(array9);

// Ex: 10

// let array10 =["ფორთოხალი", "ბანანი", "მსხალი" ]

// array10.push ("ვაშლი", "ანანასი")
// array10.unshift ("საზამთრო")

// console.log(array10);

// array10.splice (3,0, "მანგო" );
// console.log(array10);

// array10.shift();
// array10.pop();
// console.log(array10);

// Ex: 14

// Ex: 15

let words = ["Madrid", "Rome", "Milan", "Berlin"];

let result = words.filter(item => {
    if (item.icludes("m") || item.icludes("M"))
})

console.log(result);


// Ex: 11

let array11 = [1, 2, 3, 4, 5];

array11.splice(3, 0, "a", "b", "c");
console.log(array11);

// Ex: 12

let arr = [1, 2, 3, 4, 5];

// Ex: 13

// let array13 = [12, 25, 3, 6, 8, 14, 7, 23];

// let array13Numbers = array13.map(function (x) {
//     return x / 3;
// })

// console.log(array13Numbers);

// Ex: 15

let array15 = ['Madrid', 'Rome', 'Milan', 'Berlin'];

console.log(array15.length);

console.log(array15.includes("m", "M"));
console.log(array15.toLowercase());

// EX:16

// let arrAY16 = [-1, -2, -3, 4].some((number) => number > 0)

// console.log(arrAY16);

// Ex: 17

// let array17 =[2,15,10,24]
// array17.splice (2,1)
// console.log(array17);

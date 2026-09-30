# Javascript Constructs

## Assignment operators

=, +=, -=, *=, /=, %=, **=, &&= and ||=

"=" does not test equality, it assigns a value to the variable.
The variable is at the left of the equal sign.

## Arithmetic opearators

+, -, *, /, % and **

In Javascript, "%" is not "modulus", it is "remainder".

- Arithmetic operators are used to perform mathematical calculations

- They can be used with both literal values and variables

- Operator precedence determines the order of operations in complex expressions

## Comparison operators

==, === (strict equal, in value and type), !=, !== (strict not equal,
in value or type), <, <=, > and >=

- Comparison operators return boolean values (true/false)

- They are commonly used in conditional statements and loops to control program flow

- Strict equality (===) checks both value and type, while loose equality (==) checks only value

## Logical operators

Logical operators are used to combine multiple boolean expressions and return
a boolean value based on the compounded logical operation.

&&, || and !

- Logical operators are used to combine or invert boolean expressions

- They are essential for controlling program flow in conditional statements and loops

- Short-circuit evaluation with && and || stops evaluation as soon as the result is known

## Expressions

An expression is a combination of

- Values

- Variables

- operators

- Functions

that are evaluated to produce a single value.

Arithmetic expressions: involve arithmetic operators (such as +, =, -, *, /)
toperform mathematical calculations.

let result = ( 5 +3) * 2;

String expressions: involve string concatenation or manipulation using "+" or
string methods.

let greeting = "Hello, " + "world!";

Logical expressiona: use logical operators such as &&, ||, ! to
evaluate Boolean values.

let isAdult = age >= 18 && hasID;

## Decisions

Conditional estructures are used to make decisions in programming.
They allow the program to execute different blocks of code based on
whether a specified condition is true or false. The most common conditional
structures in Javascript are the *if* / *else if* / *else* statement
and the *switch* statement.

## Loops

Loops are used to repeat a block of code multiple times until a specified
condition is met. The mosto common ways to loop in Javascript are the *for*
loop, the *while* loop, the *for...of* and *for...in* loops, and the array
*forEach* method.

----

## Examples

for (let i=0; i<37; i++) {
    console.log("Iteration number: " + i);
}
VM358:2 Iteration number: 0
VM358:2 Iteration number: 1
VM358:2 Iteration number: 2
VM358:2 Iteration number: 3
VM358:2 Iteration number: 4
VM358:2 Iteration number: 5
VM358:2 Iteration number: 6
VM358:2 Iteration number: 7
VM358:2 Iteration number: 8
VM358:2 Iteration number: 9
VM358:2 Iteration number: 10
VM358:2 Iteration number: 11
VM358:2 Iteration number: 12
VM358:2 Iteration number: 13
VM358:2 Iteration number: 14
VM358:2 Iteration number: 15
VM358:2 Iteration number: 16
VM358:2 Iteration number: 17
VM358:2 Iteration number: 18
VM358:2 Iteration number: 19
VM358:2 Iteration number: 20
VM358:2 Iteration number: 21
VM358:2 Iteration number: 22
VM358:2 Iteration number: 23
VM358:2 Iteration number: 24
VM358:2 Iteration number: 25
VM358:2 Iteration number: 26
VM358:2 Iteration number: 27
VM358:2 Iteration number: 28
VM358:2 Iteration number: 29
VM358:2 Iteration number: 30
VM358:2 Iteration number: 31
VM358:2 Iteration number: 32
VM358:2 Iteration number: 33
VM358:2 Iteration number: 34
VM358:2 Iteration number: 35
VM358:2 Iteration number: 36
undefined
let count = 7;
undefined
while (count < 12) {
    console.log("Count is: " + count);
    count++;
}
VM616:2 Count is: 7
VM616:2 Count is: 8
VM616:2 Count is: 9
VM616:2 Count is: 10
VM616:2 Count is: 11
11

let fruits = ["apple", "banana", "cherry"];
undefined
fruits.forEach(function(fruit) {
    console.log("Fruit: " + fruit);
}
VM906:3 Uncaught SyntaxError: missing ) after argument list (at VM906:3:1)
fruits.forEach(function(fruit) {
    console.log("Fruit: " + fruit);
});
VM922:2 Fruit: apple
VM922:2 Fruit: banana
VM922:2 Fruit: cherry
undefined
let frutas = ["pera", "banana", "durazno", "guayaba"];
undefined
frutas.forEach(function(fruta_oferta) {
    console.log("Oferta: " + fruta_oferta);
});
VM1019:2 Oferta: pera
VM1019:2 Oferta: banana
VM1019:2 Oferta: durazno
VM1019:2 Oferta: guayaba
undefined
frutas.forEach(function(fruta_oferta) {
    console.log("Oferta: " + fruta_oferta);
});
VM1021:2 Oferta: pera
VM1021:2 Oferta: banana
VM1021:2 Oferta: durazno
VM1021:2 Oferta: guayaba
undefined
for (const fruto of frutas) {
    console.log("Fruto de temporada: " + fruto);
}
VM1250:2 Fruto de temporada: pera
VM1250:2 Fruto de temporada: banana
VM1250:2 Fruto de temporada: durazno
VM1250:2 Fruto de temporada: guayaba
undefined
let student = { name: "Virginia", score: 89 };
undefined
for (const key in student) {
    console.log(key + "+ " + student[key]);
}
VM1615:2 name+ Virginia
VM1615:2 score+ 89
undefined
for (const key in student) {
    console.log(key + ": " + student[key]);
}
VM1619:2 name: Virginia
VM1619:2 score: 89
undefined
const DAYS = 6;
undefined
const LIMIT = 30;
undefined
let studentReport = [11,42,33,64,29,37,44];
undefined
for (const score of studentReport) {
    console.log("puntaje: " + score);
}
VM2024:2 puntaje: 11
VM2024:2 puntaje: 42
VM2024:2 puntaje: 33
VM2024:2 puntaje: 64
VM2024:2 puntaje: 29
VM2024:2 puntaje: 37
VM2024:2 puntaje: 44
undefined
for (const score of studentReport) {
    if (score < 33) {console.log("puntaje: " + score);}
}
VM2063:2 puntaje: 11
VM2063:2 puntaje: 29
undefined

using forEach

studentReport.forEach(function(score) {
    console.log("Puntaje: " + score);
});
VM2554:2 Puntaje: 11
VM2554:2 Puntaje: 42
VM2554:2 Puntaje: 33
VM2554:2 Puntaje: 64
VM2554:2 Puntaje: 29
VM2554:2 Puntaje: 37
VM2554:2 Puntaje: 44
undefined
studentReport.forEach(function(score) {
    if (score < 33) {
    console.log("Puntaje: " + score);
}});
VM2584:3 Puntaje: 11
VM2584:3 Puntaje: 29


using for...in

for (const index in studentReport) {
    console.log("Puntos: " + index);
}

VM2947:2 Puntos: 0  <-- index of first element
VM2947:2 Puntos: 1
VM2947:2 Puntos: 2
VM2947:2 Puntos: 3
VM2947:2 Puntos: 4
VM2947:2 Puntos: 5
VM2947:2 Puntos: 6
undefined

for (const index in studentReport) {
    console.log("Puntos: " + studentReport[index]);
}

VM2977:2 Puntos: 11  <-- value of first element
VM2977:2 Puntos: 42
VM2977:2 Puntos: 33
VM2977:2 Puntos: 64
VM2977:2 Puntos: 29
VM2977:2 Puntos: 37
VM2977:2 Puntos: 44
undefined

for (const index in studentReport) {
    if (studentReport[index] < 33) {
    console.log("Puntos: " + studentReport[index]);
}};

VM3022:3 Puntos: 11  <-- element with value < 33
VM3022:3 Puntos: 29



using while loop

let studentReport = [11,42,33,64,29,37,44];

let LIMIT = 38;

i = 0;

var longitud = studentReport.length;

while (i < longitud) {
    if (studentReport[i] < LIMIT) {
        console.log("Desaprobados: " + studentReport[i]);
    }
        i++;
    };
VM198:3 Desaprobados: 11
VM198:3 Desaprobados: 33
VM198:3 Desaprobados: 29
VM198:3 Desaprobados: 37
6

----

// Printing this day and DAYS following it

let DAYS = 6;

// Print today's name

let today = new Date();

let todaystring = new Intl.DateTimeFormat("en-US",weekday: "long").format(today);

VM617:1 Uncaught SyntaxError: missing ) after argument list (at VM617:1:51)

let todaystring = new Intl.DateTimeFormat("en-US",{weekday: "long"}).format(today);

console.log(todaystring);
VM719:1 Thursday

// Print following DAYS days (6 days)

for (let i=1; i <= DAYS; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(nextday);
    console.log(nextdaystring);
};

VM1368:5 Friday         <-- today + 1
VM1368:5 Saturday
VM1368:5 Sunday
VM1368:5 Monday
VM1368:5 Tuesday
VM1368:5 Wednesday      <-- today + 6

// Print following DAYS days (4 days)

let DAYS = 4;

for (let i=1; i <= DAYS; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(nextday);
    console.log(nextdaystring);
};

VM1418:5 Friday         <-- today + 1
VM1418:5 Saturday
VM1418:5 Sunday
VM1418:5 Monday         <-- today + 4




// function declaration
function print1To10() {
    for(let i = 1; i<=10; i++) {
        console.log(i);
    }
}


// print1To10();


/// question 2 create a function that takes number and return squeared number
function square(num) {
    return num * num;
}

// console.log(square(5));
// console.log(square(10));
// console.log(square(15));

/// question 3 create a function that takes number and return cubed number
function cube(num) {
    return num * num * num;
}


// console.log(cube(5));





//// question 3 create a function expression that return the max of two numbers

const max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// console.log(max(5, 10));
// console.log(max(10, 5));
// console.log(max(15, 5));
// console.log(max(5, 15));




/// question 4 function expression return contaainted string

const concatenate = (str1, str2) => {
    return str1 + str2;
}

// console.log(concatenate("hello", " world"));
// console.log(concatenate("hello", " "));


const addition = ((num1, num2) => {
    return num1 + num2;
})

// console.log(addition(5, 10));


const valid = (str, s) => {

    for(let i = 0; i < str.length; i++) {

        let ch = str.charAt(i);
        if(ch === s) return true;

    }

    return false;
}

// console.log(valid("hello", "l")); // true




/// question 5 create a function that send default value 

function sendDefault(a, b = 2) {

    return a + b;
    
}

// console.log(sendDefault(5));
// console.log(sendDefault(5, 10));


// question 6 create a function that return the default value if

function sendDefault(a, b = 2) {

    let n = this.b = b

    return n;
}

// console.log(sendDefault(5));
// console.log(sendDefault(5, 10));





//// higher order function 


function add(fun1, fun2) {

    return fun1() + fun2();
}


function fun1() {
    return 10;
}

function fun2() {
    return 20;
}

console.log(add(fun1, fun2));

function addition(a, b) {

    return a + b;
}

console.log(addition(2, 3));    /// addition program for the 2 + 3 = 5




function substraction(a, b) {

    return a + b;
}


console.log(substraction(5, 2));   /// sunstraction program for the 5 - 2 = 3



function multiplication(a, b) {

    return a * b;
}


console.log(multiplication(4, 5));  /// multiplication program for the 4 * 5 = 20


function divisor(a, b) {
    return a / b;
}

console.log(divisor(6, 3));  /// 6 / 3 = 2



function reminder(a,b) {
    return a % b;
}


console.log(reminder(8, 3));  /// 8 % 3 = 2






/// assignment operators 


function plusEqualTo(a) {

    return a += 10;
}


let a =3;


console.log(plusEqualTo(a));  /// += 13



function minusEqualTo(a) {

    return a -= 10;
}


console.log(minusEqualTo(a));  /// 7 



function graterThan(a,b) {
    return a > b;
}

console.log(graterThan(5, 3));  /// true

function lessThan(a,b) {
    return a < b;
}

console.log(lessThan(5, 3));  /// false



function graterThanOrEqual(a,b) {
    return a >= b;
}

console.log(graterThanOrEqual(5, 3));  /// true
console.log(graterThanOrEqual(5, 5));  /// true
console.log(graterThanOrEqual(3, 5));  /// false

function lessThanOrEqual(a,b) {
    return a <= b;
}

console.log(lessThanOrEqual(5, 3));  /// false
console.log(lessThanOrEqual(5, 5));  /// true
console.log(lessThanOrEqual(3, 5));  /// true


function simpleEqual(a,b) {
    return a == b;
}

console.log("line 112 => ", simpleEqual(5, 5));  /// true
console.log("line 113 => ", simpleEqual(5, 3));  /// false
console.log("line 114 => ", simpleEqual(5, "5"));  /// false


function strictCheck(a,b) {
    return a === b;
}

console.log("line 120 => ", strictCheck(5, 5));  /// true
console.log("line 121 => ", strictCheck(5, 3));  /// false
console.log("line 122 => ", strictCheck(5, "5"));  /// false





/// logical operators 

function and(a, b) {
    return a && b;
}

console.log("line 135 => ", and(true, true));  /// true

function or(a, b) {
    return a || b;
}

console.log("line 141 => ", or(true, true));  /// true

function not(a) {
    return !a;
}


console.log("line 146 => ", not(true));  /// false
console.log("line 147 => ", not(false));  /// true


/// ternary operator 
function simpleTernary(a) {
    a < 5 ? "true" : "false";
    return a > 5 ? true : false;
}


console.log("line 158 => ", simpleTernary(5));  /// true
console.log("line 159 => ", simpleTernary(3));  /// false


function complexTernary(a) {
    a < 5 ? "true" : "false";
    return a > 5 ? true : false;
}

console.log("line 165 => ", complexTernary(5));  /// true
console.log("line 166 => ", complexTernary(3));  /// false


/// shift operators 
function leftShift(a, b) {
    return a << b;
}

console.log("line 177 => ", leftShift(5, 2));  /// 10
console.log("line 178 => ", leftShift(5, 3));  /// 80

function rightShift(a, b) {
    return a >> b;
}

console.log("line 179 => ", rightShift(5, 2));  /// 2
console.log("line 180 => ", rightShift(5, 3));  /// 1

function unsignedRightShift(a, b) {
    return a >>> b;
}

console.log("line 181 => ", unsignedRightShift(5, 2));  /// 2
console.log("line 182 => ", unsignedRightShift(5, 3));  /// 1


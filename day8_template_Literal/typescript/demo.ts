
/// template literal

type Name = 'gaurav ghuge' ;
type Age = 25 ;

// console.log(`My name is ${name} and I am ${age} years old.`);


///    question 2 declare the multiline template literal

const str = ` this is the first line
    this is the second line 
    this is the third line 
    `

    // console.log(str);



// activity 2

///    question 3 destructure the array
const [firstName, lastName, age1] = ['gaurav', 'ghuge', 25];
const demo = ['gaurav', 'ghuge', 25];

// console.log(demo);
// console.log(firstName, lastName, age1);



///    question 4 destructure the object

let object1 = {
    name: 'gaurav ghuge',
    age: 25,
    address: {
        city: 'delhi',
        country: 'india'
    }
}

function destructObject(object1) {

    const {name, age, address: {city, country}} = object1;

    console.log(name, age, city, country);

}

// destructObject(object1);




/// activity 3


/// question of the spread and rest operator



const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const demo1 = [...arr1, "gaurav", "ghuge"];

function useSpread(arr1) {

    const demo = [...arr1, "gaurav", "ghuge"];

    console.log(demo);
}

// useSpread(arr1);


function useRest(demo1) {
    
    const [demo, ...arr1] = demo1;

    console.log("...arr1 => ", ...arr1);
}

// useRest(demo1);




/// activity 4

/// question use the function with default parameter

// const function1:number = (a: number, b = 10) => {
//     console.log(a, b);
//     return a * b;
// };


// console.log(function1(10));
// console.log(function1(10, 20));






/// activity 5


/// question 5 use the  Enhanced Object Literals
const obj1: any = {
  name: 'gaurav ghuge',
  age: 25,
  address: {
      city: 'delhi',
      country: 'india'
  }
};


// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.address.city);
// console.log(obj1.address.country);
// console.log(obj1['name']);
// console.log(obj1['address']['city']);
// console.log(obj1['address']['country']);
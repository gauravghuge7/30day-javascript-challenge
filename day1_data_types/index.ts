

/// Activity 1: variables declaration


const way = 'Hello World!';

console.log(way);


//// typescript data types ////

let demoName:string = 'gaurav ghuge ';

console.log(demoName);

let number1:Number = 290;
console.log(number1);

let boolean1:boolean = true;
console.log(boolean1);

// let boolean2:boolean = "true";  // this is wrong we can't      //  "true" => true


let boolean2:boolean | string | Number = "true";  // this is right       //  "true" => true

console.log(boolean1);

let data2 : string |number | boolean | null | undefined = null;
console.log(data2);


data2 = "gaurav ghuge"
console.log(data2);






interface Person {
    name: string;
    age: number;
  }
  let person: Person = { name: "John", age: 25 };

  console.log(person);
  console.log(typeof person);
interface Car {
    demo: string;
    demo2: Number;
    // demo3: Car;
}

let car:Car = {demo:"audi", demo2:20,};

console.log(car);


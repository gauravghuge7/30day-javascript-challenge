
/// objects in typescript

let person: any = {
  name: "John",
  age: 30,
  eyeColor: "blue",
  address: {
    street: "100 Main St",
    city: "New York",
    state: "NY",
    zip: "10021"
  }
}
console.log(person);


let person2  = {


}




function printPerson(person: any) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.eyeColor);
  console.log(person.address.street);
  console.log(person.address.city);
  console.log(person.address.state);
  console.log(person.address.zip);
}
printPerson(person);
printPerson(person2);
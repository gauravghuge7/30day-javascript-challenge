

const addition = (a, b) => {

    return a + b;
}



module.exports = addition;




class person  {

 

    constructor(name, age) {
       this.name = name;
       this.age = age;
    }
}



const p = new person("gaurav ghuge");

console.log(p.name);
console.log(p.age);


const p1 = new person("gaurav ghuge", 30);

console.log(p1.name);
console.log(p1.age);





/// Objects


/// declaration of a object

let book = {
    title: "The Great Gaurav ghuge ",
    author: "Gaurav Ghuge",
    year: 2018,
}

// console.log(book);
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);


/// Object literals
let book2 = {
    title: "The Great Gaurav ghuge ",
    author: "Gaurav Ghuge",
    year: 2018,
};



/// question  3   create a function that return the title and author of the book

function question3() {
    return book.title + " " + book.author;
}

// console.log(question3());


function question4() {

    return book.year = 2019;

}

// console.log(question4());
// console.log(book.year);






let library = {

    book: {
        title: "The Great Gambler",
        author: "gaurav ghuge"

    }
}

// console.log(library.book.title);
// console.log(library.book.author);



function question5() {

    let book = "";
    this.book = library.book;

    console.log(this.book);
}

// console.log(question5());


let data = {
    name: "gaurav",
    age: 20,
    gender: "male",

}

function printByIteration() {
    
    
    for (let key in data) {

        console.log(key);
        console.log(data[key]);
    }
}

// printByIteration();



function printKeys() {

    for(let key in data) {

        console.log(key);
    }
}

// printKeys();


function printValues() {
    
    for(let value in data) {
        console.log(data[value]);
        console.log(Object.values(data));
    }
}

// printValues();


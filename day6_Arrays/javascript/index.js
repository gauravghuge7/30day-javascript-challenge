
/// arrays 

// create an array with the values 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let myArray = new Array();

myArray = [1,2,3,4,5,6,7,8,9,10];

// console.log(myArray);


function printArray(myArray) {

    for(let i=0; i<myArray.length; i++) {
        console.log(myArray[i]);
    }
}

// printArray(myArray);

// (function printLastAndFirst(myArray) {

//     console.log(myArray[myArray.length-1]);
//     console.log(myArray[0]);
// })(myArray);    //// immediate function execution



myArray.push(11);
myArray.push(12);
myArray.push(13);

// printArray(myArray);


///  remove elements from the end of the array
myArray.pop();  
myArray.pop();  
myArray.pop();  

// printArray(myArray);


///  remove the first element from the array
myArray.shift();
myArray.shift();
myArray.shift();

// printArray(myArray);

/// insert elements at the beginning of the array
myArray.unshift(100);
myArray.unshift(100);
myArray.unshift(100);

// printArray(myArray);

/// insert element at the end of the array

myArray[myArray.length] = 1000;

// printArray(myArray);





function printViaMap(myArray) {

    myArray.map((e) => {
        console.log(e);
    })
}

// printViaMap(myArray);


function printViaFilter(myArray) {

    const data = myArray.filter((e) => {
        return e % 2 === 0;
    })

    console.log(data);


}


// printViaFilter(myArray);


function checkReduceMethod(myArray) {
    
    myArray.reduce((e, l) => {
        console.log(e + l);
    })

}




// checkReduceMethod(myArray);



function printArrayViaForEach(myArray) {
    
    myArray.forEach((e) => {
        console.log(e);
    })
}

// printArrayViaForEach(myArray);


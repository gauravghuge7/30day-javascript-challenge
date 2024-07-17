

/// loops 

// question 1   print the numbers from 1 to 10

function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// printOneToTen();


// question 2   print the table of 5

function printTableOfFive() {
    for(let i=1; i<=10; i++) {

        console.log(i*5);
    }
}

// printTableOfFive();


// question 3   calculate the sum of the numbers from 1 to 10

function sumOfNumbersFrom1To10(n) {
    let sum = 0;

    for(let i=0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumOfNumbersFrom1To10(10));  



///  questions 4  print the numgber 10 to 0

function printNumber10To0() {

    for(let i=10; i>=0; i--) {
        console.log(i);
    }
}

// printNumber10To0();


///  questions 5  print the number 1 to 10 using do while loop

function printNumber1To10UsingDoWhileLoop() {
    let i=0;

    do {
        console.log(i);
        i++;
    }
    while(i<=10)
}

// printNumber1To10UsingDoWhileLoop();


// question 6  print the factorial of a number using do while loop

function printFactorialOfANumberUsingDoWhileLoop(n) {
    let i=1;
    let factorial = 1;

    do {
        factorial += i;
        i++;
    }
    while(i<10);
    
    console.log(factorial);
}


// printFactorialOfANumberUsingDoWhileLoop(5);



// question 7  print the pattern following

/*

* 
* * 
* * *
* * * *
* * * * * 

*/


function printPattern() {

    for(let i=1; i<=5; i++) {

        let line = "";
        for(let j=1; j<=i; j++) {
            line += "* ";
        }
        console.log(line+" ");
   
    }
}


// printPattern();


// question 8  print the 1 to 10 skip 5


function print1To10Skip5() {
    for(let i=1; i<=10; i++) {

        if(i == 5) continue;
        console.log(i);
    }
}

// print1To10Skip5();




//// question 9 for printing the 1 to 10 but when 7 break the loop

function print1To10ButWhen7BreakTheLoop() {

    for(let i=1; i<=10; i++) {
        if(i==7) break;
        console.log(i);
    }
}

print1To10ButWhen7BreakTheLoop();
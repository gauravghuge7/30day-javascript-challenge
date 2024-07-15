

/// control statements ///


// check number positive or negative 


function checkPositive(n) {

    if(n < 0) {
        console.log("number is negative");
    }
    else if(n > 0) {
        console.log("number is positive");
    }
    else {
        console.log("Number is 0");
    }

}

// console.log(checkPositive(23));   //// FIND THE UNDEFINED ERROR HERE
// console.log(checkPositive(-23));
// console.log(checkPositive(0));
// checkPositive(0);
// checkPositive(-0);
// checkPositive(0.5);
// checkPositive(-0.5);
// checkPositive(0.0);
// checkPositive(-0.0);




// check person is elgible for voting 


function voting(n) {
    if(n >= 18) {
        console.log("Person is eligible for voting");
    }
    else {
        console.log("Person is not eligible for voting");
    }
}


// voting(23);





/// find the largest fron three number 


function largest(a, b, c) {

    if(a > b) {
        
        if(a > c) {
            console.log("a is the largest");
        }
        else {
            console.log("c is the largest");
        }           
    }

    else {
        if(b > c) {
            console.log("b is the largest");
        }
        else {
            console.log("c is the largest");
        }           
    }
}


// largest(23, 90, 67);
// largest(23, 45, 67);
// console.log(largest(489, 45, 67));
// console.log(largest(23, 45, 67));





function evenOdd(n) {

    if(n % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}


// evenOdd(23);  // even
// evenOdd(45);  // odd
// evenOdd(40);  // even
// evenOdd(67);  // odd
// evenOdd(88);  // even






///// write a program to find the leap year 


function leapYear(year) {

    if(year % 4 == 0) {

        if(year % 100 == 0) {

            if(year % 400 == 0) {
                console.log("its a leap year");
            }

            else {
                console.log(" Not a leap year");
            }

        }

        else {

            console.log("its a leap year");
        }

    }

    else {
        console.log("Not a leap year");
    }

}


// leapYear(2000); // Leap year
// leapYear(2013);     // Not a leap year
// leapYear(2015);   // Not a leap year
// leapYear(2012);   // Leap year
// leapYear(2016);   // Leap year
// leapYear(2021);   // NOt a Leap year

// console.log("Line 151 => ",leapYear(1700));   // NOt a Leap year



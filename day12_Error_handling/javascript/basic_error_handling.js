/// basic of error handling in javascript

const ApiError = require("./customError.js");


function checkTryCatch() {
    try {
       
       console.log("this is the try block");
       
       let sum = 20 % 0;
       console.log(sum & 10);

    //    a + b // compile error
   
    } 
    catch (error) {
       console.log(error);
    }
}

// checkTryCatch();




/// try catch and finally block 

function tryCatchFinally() {
      try {
         console.log("this is the try block");
         let sum = 20 % 0;
         console.log(sum & 10);
      } 
      catch (error) {
         console.log(error);
      } 
      finally {
         console.log("this is the finally block");
      }
}


// tryCatchFinally();

/// throwing error

function throwError() {

   throw new ApiError(400, "this is the error message");
}

throwError();
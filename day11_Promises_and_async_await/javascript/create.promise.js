

function myPromise()  {

    return new Promise((resolve, reject) => {

        let success = true;

        if(success) {
            resolve("promise resolved");
        }

        else {
            reject("promise rejected");
        }

    })
}


try {
    
    const response = myPromise();

    // console.log(response);
} 

catch (error) {
    console.log(error);
}




/// chaining promises

const promise = new Promise((resolve, reject, pending) => {

    setTimeout( () => {
       resolve("promise resolved");
       console.log("promise resolved");
    }, 3000);
})


try {
    const result = promise();

    console.log(result);
} catch (error) {
    
    console.log(error);
}







/// create a async function 

async function myAsyncFunction() {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("promise resolved");
            console.log("promise resolved");
        }, 3000);
    })
}

myAsyncFunction();



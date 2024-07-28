const axios = require('axios');

/// basic of promices in javascript

/// promise

/// create a promise and display a message after 3 seconds



// const promise = new Promise((resolve, reject) => {


//     setTimeout( () => {


//         resolve("promise resolved");

//         console.log("promise resolved");

//     }, 3000);


   

// });


function handleSubmit() {

    return new Promise((resolve, reject) => {

        const response = axios.get("https://jsonplaceholder.typicode.com/posts")



        try {
        
            if(response.success) {
                resolve(response.data);
            }
            
        } 
        catch (error) {
            reject(error);
        }









        // .then ((response) => {
        //     resolve(response.data);
        // })
        // .catch((error) => {
        //     reject(error);
        // })
    
    })
}


setTimeout( () => {

    console.log("start");
    const response = handleSubmit();

    try {
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }

})




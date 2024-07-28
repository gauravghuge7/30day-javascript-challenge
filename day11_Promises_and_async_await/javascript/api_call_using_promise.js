


// api call using promise

const promise = new Promise((resolve, reject) =>  {
  

    const response = fetch("https://jsonplaceholder.typicode.com/posts")
      
        .then(response => response.json())

        .then(data => {
            
            resolve(data);
            console.log(data);
            

        })

        .catch(error => reject(error));

})


try {
    const data =  promise();
    console.log(data);
}
catch(error) {
    console.log(error);
}


class ApiError extends Error {

    constructor(statusCode, message) {
        super(message);

        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.message = message;
    }
}


function throwError() {

    try {
    
        let sum = "";

        if(!sum) {
            throw new ApiError(400, "this is the error message");
        }
        
    } 
    catch (error) {
        throw new ApiError(400, "this is the error message");
        
    }
}

throwError();


module.exports = ApiError;
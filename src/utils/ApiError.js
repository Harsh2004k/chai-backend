// Define a custom ApiError class that extends the built-in Error class
class ApiError extends Error {
    // Constructor for the ApiError class
    constructor(
        statusCode,         // HTTP status code for the error
        message = "Something went wrong", // Error message (default: "Something went wrong")
        errors = [],        // Additional error details or messages (default: empty array)
        stack = ""          // Stack trace information (default: empty string)
    ) {
        // Call the parent class constructor (Error) with the provided message
        super(message);

        // Initialize properties specific to ApiError
        this.statusCode = statusCode; // HTTP status code associated with the error
        this.data = null; // Additional data (null by default)
        this.message = message; // Error message
        this.success = false; // Indicates failure
        this.errors = errors; // Additional error details or messages

        // If stack trace information is provided, set the stack property; otherwise, capture the stack trace
        if (stack) {
            this.stack = stack;
        } else {
            // Capture the stack trace for this instance of ApiError
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other parts of the codebase
export { ApiError };





// class ApiError extends error{
//     constructor(
//         statusecode,
//         message= "something went wrong",
//         errors=[],
//         stack= ""

//     ){
//         super(message);
//         this.statusCode= statusecode,
//         this.data = null,
//         this.message= message,
//         this.success = false,
//         this.errors= errors;
//         if(stack){
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }

//     }
// }
// The asyncHandler is a higher order function that takes a requestHandler function as an argument.
const asyncHandler = (requestHandler) => {
    // It returns an asynchronous function which takes req, res, and next as arguments.
    return async (req, res, next) => {
        try {
            // It tries to resolve the Promise returned by the requestHandler.
            await requestHandler(req, res, next);
        } catch (err) {
            // If there's an error, it passes the error to the next middleware in the stack.
            next(err);
        }
    };
};

export { asyncHandler };



// VERSION 2: WITH PROMISE
/*
// This function is a higher-order function that wraps an asynchronous request handler
const asyncHandler = (requestHandler) => {
    // Returns a middleware function that accepts the standard Express parameters (req, res, next)
    return (req, res, next) => {
        // Wraps the execution of the requestHandler in a Promise
        // Resolves with the result or catches any errors that occur
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

// Exporting the asyncHandler function for use in other parts of the codebase
export { asyncHandler };
*/




// Version 1: Initial code with missing parameters and incorrect arrow function syntax.
// const asyncHandler = () => {}

// Version 2: Adding a parameter "func" and an empty arrow function.
// const asyncHandler = (func) =>  () => {} 

// Version 3: Adjusting the function to an async arrow function but missing the proper parameters.
// const asyncHandler = (func) => async() => {}

// Version 4: Properly structured asyncHandler, handling async functions and errors in Express middleware.


/* const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next); // Await the asynchronous function passed in.
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}

export { asyncHandler }
*/
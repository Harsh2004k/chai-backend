// The apiResponse class is used to standardize the API responses.
class apiResponse {
    // The constructor takes three parameters: statuscode, data, and message.
    constructor(statuscode, data , message = "success"){
        // It sets the statuscode property to the statuscode argument.
        this.statuscode = statuscode;
        // It sets the data property to the data argument.
        this.data = data;
        // It sets the message property to the message argument.
        this.message = message;
        // It sets the success property based on the statuscode.
        // If the statuscode is less than 400, success is true. Otherwise, it's false.
        this.success = statuscode < 400;
    }
}

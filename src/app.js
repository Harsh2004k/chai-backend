// Import necessary modules/packages
import express from "express"; // Import the Express framework
import cors from "cors"; // Import CORS middleware
import cookieParser from "cookie-parser"; // Import cookie parser middleware

// Create an instance of the Express application
const app = express();

// Set up CORS middleware to handle Cross-Origin Resource Sharing
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Define allowed origin from environment variable
    credentials: true // Allow credentials (like cookies) to be sent in cross-origin requests
}))

// Use middleware to parse incoming JSON payloads, limited to 16 kilobytes
app.use(express.json({ limit: "16kb" }));

// Use middleware to parse incoming URL-encoded payloads, extended to support complex data structures, limited to 16 kilobytes
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files (like images, CSS, HTML, etc.) from the "public" directory
app.use(express.static("public"));

// Use the cookie parser middleware to parse cookies attached to the client request object
app.use(cookieParser());

// Export the configured Express app for use in other parts of the codebase
export { app };

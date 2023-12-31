//require('dotenv').config({path: './env'})   // (work too )

import connectDB from "./db/index.js";

import dotenv from "dotenv"   // for consistency of the code 
dotenv.config({
    path: './env'
})


connectDB()
.then( () => {

    app.on("error", (error) => {
        console.log("error:", error)
        throw error
    })
    
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running on PORT: ${process.env.PORT}`)
    }) 

})
.catch(error => console.log("MongoDB connection failed !!!", error))




/*
import express from "express";
const app = express()
( async () => {
    try {
        await mongoose.connect(`process.env.MONGODB_URI" ${DB_NAME}`)   
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        })

        app.listne(process.env.PORT, () => {
            console.log(`App Listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error", error)
        throw error
    }
} )()
*/
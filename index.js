import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Connect to the database and start the server
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});



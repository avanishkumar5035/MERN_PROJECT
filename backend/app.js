const express = require("express");
const app = express();



app.use(express.json());

// Route import
const product = require("./routes/productRoute");

// Route mount
app.use("/api/v1", product);


// Middleware for Error 
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);

module.exports = app;

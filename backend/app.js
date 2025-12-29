const express = require("express");
const app = express();



app.use(express.json());

// Route import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
// Route mount
app.use("/api/v1", product);
app.use("/api/v1", user);


// Middleware for Error 
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);

module.exports = app;

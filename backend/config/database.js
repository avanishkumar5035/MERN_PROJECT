const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,
        // {
        // useNewUrlParser: true,
        // useUnifindTopology: true,
        // useCreateIndex: true,
        // }
    )
        .then((data) => {
            console.log(`MongoDB connected: ${data.connection.host}`);
        });
};

module.exports = connectDatabase;

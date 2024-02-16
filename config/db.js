const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect("mongodb://localhost:27017/boysChatRoom");

        console.log("Connect to database successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;
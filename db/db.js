const mongoose = require("mongoose");

// const url = "mongodb://localhost:27017";
const url="mongodb+srv://namratajas2020:namrata123@cluster0.t1eqbmd.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("database is connected");
  } catch (error) {
    console.log(error, "something went wrong");
  }
};

module.exports = connect;

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./db/db");
const productRoute = require("./Routes/productRoute");
const userdbroute = require("./Routes/userdbroute");
const cartRoute = require("./Routes/cartRoute");
const orderRoute = require("./Routes/orderRoute");
dotenv.config();
const app = express();
app.use(express.json());
const corsOption = {
  origin: "*",
};
app.use(cors(corsOption));

app.use("/orderdata", orderRoute);

app.use("/product", productRoute);
app.use("/userdata", userdbroute);
app.use("/cartdata", cartRoute);

port = process.env.PORT;
app.listen(port, async () => {
  try {
    console.log(`server running on port ${port}`);
    await connect();
  } catch (error) {
    console.log("server not working", error.message);
  }
});

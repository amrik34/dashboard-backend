const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.MONGODB_URI;
mongoose
  // .connect("mongodb://127.0.0.1/e-commerce")
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

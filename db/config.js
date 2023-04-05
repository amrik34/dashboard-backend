const mongoose = require("mongoose");
const DB =
  "mongodb+srv://amrik3412singh:quiO3hubyDP7nULG@cluster0.t0tqxz5.mongodb.net/mernStack?retryWrites=true&w=majority";

mongoose
  // .connect("mongodb://127.0.0.1/e-commerce")
  .connect(DB)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

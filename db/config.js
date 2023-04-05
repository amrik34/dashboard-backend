const mongoose = require("mongoose");
// const DB =
// "mongodb+srv://amrik3412singh:quiO3hubyDP7nULG@cluster0.t0tqxz5.mongodb.net/mernStack?retryWrites=true&w=majority";
// const DB = process.env.MONGODB_URI;
mongoose
  // .connect("mongodb://127.0.0.1/e-commerce")
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

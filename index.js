const express = require("express");
const cors = require("cors");
require("./db/config");

const User = require("./db/User");
const OptionsTemplate = require("./db/OptionsTemplate");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("app is working");
});
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.post("/templates", async (req, resp) => {
  let optionsTemplate = new OptionsTemplate(req.body);
  let result = await optionsTemplate.save();
  resp.send(result);
});
app.get("/templates-list", async (req, resp) => {
  let optionsTemplates = await OptionsTemplate.find();
  if (optionsTemplates.length > 0) {
    resp.send(optionsTemplates);
  } else {
    resp.send({result: "No options templates found"});
  }
});

app.listen(5000);

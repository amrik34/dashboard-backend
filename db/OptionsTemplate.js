const mongoose = require("mongoose");

const optionsTemplateSchema = new mongoose.Schema({
  entryTime: String,
  exitTimeValue: String,
  IndexBuyValue: String,
  lotsTotalBuy: Number,
  strategy: String,
  profitTarget: Number,
  lossOverall: Number,
  lossPerLeg: Number,
  hedgeDistance: Number,
  debug: String,
  type: String,
  templateName: String,
});

module.exports = mongoose.model("optionsTemplates", optionsTemplateSchema);

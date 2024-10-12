const { model } = require ('mongoose');

const {HoldingsSchema} = require ('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchema); //its plural

module.exports = { HoldingsModel }
const { Schema, model, Types } = require("mongoose");

const addressSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  addressLine1: { type: String, required: true, trim: true, minLength: 5 },
  addressLine2: { type: String, trim: true, minLength: 5 },
  city: { type: String, trim: true, minLength: 2 },
  postcode: { type: String, required: true, trim: true, minLength: 2 },
  country: { type: String, required: true, trim: true, minLength: 2 },
});

const AddressModel = model("Address", addressSchema);

module.exports = AddressModel;

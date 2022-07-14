const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true, trim: true, minLength: 3 },
  email: { type: String, required: true, trim: true, minLength: 7 },
  addresses: [{ type: Types.ObjectId, ref: "Address" }],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;

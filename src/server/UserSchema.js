import mongoose from "mongoose";

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: { type: String, validate: /^[A-Z][a-z0-9_-]{3,19}$/, required: true },
  Bags: { type: Number, min: 1, max: 5, required: true }
});

export default mongoose.model("Users", UserSchema);

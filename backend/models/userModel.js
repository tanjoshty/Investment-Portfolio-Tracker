import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stocks: [
    {
      name: { type: String, required: true },
      ticker: { type: String, required: true },
      quantity: { type: Number, required: true },
      value: { type: Number, required: true },
      averagePrice: { type: Number, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;

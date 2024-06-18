import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/server.config.js";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return (
    {
      _id: this._id,
      email: this.email,
    },
    config.ACCESS_TOKEN_SECRET,
    {
      expiresIn: `${config.ACCESS_TOKEN_EXPIRY}`,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return (
    {
      _id: this._id,
      email: this.email,
    },
    config.REFRESH_TOKEN_SECRET,
    {
      expiresIn: `${config.REFRESH_TOKEN_EXPIRY}`,
    }
  );
};

const User = mongoose.model("User", userSchema);
export default User;

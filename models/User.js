import bcrypt from 'bcrypt'
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    minlength: 6,
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/],
  },
  cardio: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cardio"
  }],
  resistance: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resistance"
  }]
});

// hash user password
userSchema.pre("save", async function(next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

export const User = mongoose.model('User', userSchema);

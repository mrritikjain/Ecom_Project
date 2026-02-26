import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Username: {
    type: "String",
    require: true,
  },
  Password: {
    type: "String",
    required: true,
  },
  Email: {
    type: "String",
    require: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;

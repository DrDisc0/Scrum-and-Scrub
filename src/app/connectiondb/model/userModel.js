import mongoose from "mongoose";

// Define the schema for the user entity
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  portFoNam: {
    type: String,
    required: true,
  },

  descript: {
    type: String,
    required: true,
  },

  experi: {
    type: String,
    required: true,
  },

  skill: {
    type: String,
    required: true,
  },

  certifi: {
    type: String,
    required: true,
  },

  projects: {
    type: String,
    required: true,
  },

});

// Create and export the Mongoose model for the "users" collection based on the userSchema
export default mongoose.model("users", userSchema);
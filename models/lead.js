import mongoose, { models } from "mongoose";
const leadSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date, 
    },
    age: {
      type: Number, 
      required: true,
    },
    gender: {
      type: String,
    },
    profession: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    anniversaryDate: {
      type: Date, 
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Lead = models.Lead || mongoose.model("Lead", leadSchema);
export default Lead;

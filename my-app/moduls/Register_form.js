import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    //   unique: true,
      lowercase: true,
    },
    college: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
      trim: true,
    },
    rollNo: {
      type: String,
      required: true,
      trim: true,
    //   unique: true,
    },
    events: [
      {
        type: String,
        enum: ["Hackathon", "Workshop", "Seminar", "Sports"],
      },
    ],

    registeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const RegisterForm =
  mongoose.models.RegisterForm || mongoose.model("RegisterForm", schema);

export default RegisterForm;

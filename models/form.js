import mongoose from "mongoose";

const formModel = mongoose.Schema(
  {
    Name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
    },
    expected: {
      type: String,
    },
    current: {
      type: String,
    },
    experience: {
      type: String,
    },
    notice: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("form", formModel);

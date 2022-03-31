import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/cars");

const carSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  priceDay: {
    type: String,
    required: true
  },
  priceTotal: {
    type: String,
    required: true
  }
});

export default carSchema;

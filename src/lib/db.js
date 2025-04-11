import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(db);
    console.log(`MongoDB connected to: ${connect.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};

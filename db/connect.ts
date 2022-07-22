import mongoose from "mongoose";

const connectDB = (url: string) => {
  return mongoose.connect(url as string);
};

export default connectDB;

import mongoose, { MongooseOptions } from "mongoose";

// mongoose.set("bufferCommands", false);
const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_PRODUCTION_URL
    : process.env.MONGODB_DEVELOPMENT_URL;

if (!MONGODB_URI)
  throw new Error('MONGODB_URI is requried, can not be undefined or ""');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const connectDb = async () => {
  try {
    if (cached.conn) {
      console.log("DATABASE ALREADY CONNECTED AND USING OLD");
      return;
    }

    const options: MongooseOptions = {
      bufferCommands: false,
    };

    cached.conn = await mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        return mongoose;
      });
    console.log("DATABASE CONNECTED");
    return cached.conn;
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

export { connectDb };

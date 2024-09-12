/* eslint-disable prefer-const */
/* eslint-disable no-var */
// lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log("Db connected");
        return mongoose;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("Database connection error:", error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    throw new Error("Failed to connect to the database");
  }
}

export default dbConnect;

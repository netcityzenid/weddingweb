import mongoose from "mongoose";

let isConnected = false; // Melacak status koneksi

const connectToDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "komens", // Sesuaikan dengan nama database yang kamu gunakan
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
  }
};

export default connectToDB;

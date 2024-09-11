import { NextResponse } from "next/server";
import Comment from "../../models/Comment"; // Import model Comment
import connectDB from "../../utils/ConnectDB"; // Fungsi untuk koneksi MongoDB

export async function GET() {
  await connectDB(); // Hubungkan ke database

  try {
    // Cek apakah koneksi ke database berhasil
    console.log("Database connected");

    const comments = await Comment.find().sort({ createdAt: -1 }); // Urutkan berdasarkan waktu terbaru

    // Cek data yang diambil
    console.log("Comments fetched:", comments);

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ message: "Gagal mengambil data!" }, { status: 500 });
  }
}

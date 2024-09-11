import { NextResponse } from "next/server";
import Comment from "../../models/Comment"; // Import model Comment
import connectDB from "../../utils/ConnectDB"; // Fungsi untuk koneksi MongoDB

export async function GET() {
  await connectDB(); // Hubungkan ke database

  try {
    const comments = await Comment.find().sort({ createdAt: -1 }); // Urutkan berdasarkan waktu terbaru
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal mengambil data!" }, { status: 500 });
  }
}

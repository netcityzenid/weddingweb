import { NextResponse } from "next/server";
import Comment from "../../../models/Comment";
import connectToDB from "../../../utils/database";

export async function GET() {
  try {
    await connectToDB(); // Koneksi ke MongoDB
    const comments = await Comment.find().sort({ createdAt: -1 }); // Mengambil semua komentar dari database dan urutkan berdasarkan waktu
    return NextResponse.json(comments, { status: 200 }); // Mengembalikan response JSON dengan status 200
  } catch (error: unknown) {
    console.error("Failed to fetch comments:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: "Failed to fetch comments", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}

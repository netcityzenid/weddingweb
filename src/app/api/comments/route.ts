import { NextResponse } from "next/server";
import Comment from "../../models/Comment";
import connectToDB from "../../utils/database";

// Fungsi untuk menangani POST request (Menambah komentar)
export async function POST(req: Request) {
  try {
    await connectToDB(); // Koneksi ke MongoDB
    const { name, comment, attendance } = await req.json(); // Mengambil data dari body request
    const newComment = new Comment({ name, comment, attendance }); // Membuat instance baru dari Comment
    await newComment.save(); // Menyimpan data ke MongoDB

    return NextResponse.json({ message: "Comment added successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add comment", error }, { status: 500 });
  }
}

// Fungsi untuk menangani GET request (Mengambil komentar)
export async function GET() {
  try {
    await connectToDB(); // Koneksi ke MongoDB
    const comments = await Comment.find().sort({ createdAt: -1 }); // Mengambil semua komentar, sorting terbaru

    return NextResponse.json(comments, { status: 200 }); // Mengirimkan data komentar ke frontend
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch comments", error }, { status: 500 });
  }
}

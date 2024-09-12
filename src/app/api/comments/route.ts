import { NextResponse } from "next/server";
import Comment from "../../models/Comment";
import connectToDB from "../../utils/database";

// Fungsi untuk menangani POST request (Menambah komentar)
export async function POST(req: Request) {
  try {
    await connectToDB(); // Koneksi ke MongoDB
    const { name, comment, attendance } = await req.json(); // Mengambil data dari body request

    if (!name || !comment) {
      return NextResponse.json({ message: "Name and comment are required" }, { status: 400 });
    }

    const newComment = new Comment({ name, comment, attendance }); // Membuat instance baru dari Comment
    await newComment.save(); // Menyimpan data ke MongoDB

    return NextResponse.json({ message: "Comment added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ message: "Failed to add comment", error: String(error) }, { status: 500 });
  }
}

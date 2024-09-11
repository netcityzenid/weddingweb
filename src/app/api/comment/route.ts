import { NextResponse } from "next/server";
import Comment from "../../models/Comment"; // Import model Comment
import connectDB from "../../utils/ConnectDB"; // Fungsi untuk koneksi MongoDB

export async function POST(req: Request) {
  await connectDB(); // Hubungkan ke database

  try {
    const { name, comment, attendance } = await req.json();

    // Buat komentar baru dengan data yang dikirim dari request
    const newComment = new Comment({
      name,
      comment,
      attendance,
    });

    // Simpan komentar ke database
    await newComment.save();

    return NextResponse.json({ message: "Ucapan berhasil dikirim!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal mengirim ucapan!" }, { status: 500 });
  }
}

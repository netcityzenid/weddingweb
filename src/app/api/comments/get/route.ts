import { NextResponse } from "next/server";
import Komen from "@/app/models/Komen"; // Pastikan path ini benar
import dbConnect from "@/app/utils/database"; // Pastikan path ini benar

export async function GET() {
  try {
    await dbConnect(); // Koneksi ke MongoDB
    const comments = await Komen.find().sort({ createdAt: -1 }); // Mengambil semua komentar dari database dan urutkan berdasarkan waktu
    return NextResponse.json(comments, { status: 200 }); // Mengembalikan response JSON dengan status 200
  } catch (error: unknown) {
    console.error("Failed to fetch comments:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: "Failed to fetch comments", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}

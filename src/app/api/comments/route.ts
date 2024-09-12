import { NextResponse } from "next/server";
import Komen from "@/app/models/Komen";
import dbConnect from "@/app/utils/database"; // Pastikan path ini benar

export async function POST(req: Request) {
  try {
    await dbConnect(); // Koneksi ke MongoDB
    const { name, comment, attendance } = await req.json(); // Mengambil data dari body request

    if (!name || !comment) {
      return NextResponse.json({ message: "Name and comment are required" }, { status: 400 });
    }

    // Perbaiki pembuatan instance model dengan nama model yang benar
    const newComment = new Komen({ name, comment, attendance });
    await newComment.save(); // Menyimpan data ke MongoDB

    return NextResponse.json({ message: "Comment added successfully" }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error adding comment:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: "Failed to add comment", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Failed to add comment due to unknown error" }, { status: 500 });
  }
}

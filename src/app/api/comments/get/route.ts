import { NextResponse } from "next/server";
import Komen from "@/app/models/Komen";
import dbConnect from "@/app/utils/database";

export async function GET() {
  try {
    await dbConnect();
    const comments = await Komen.find().sort({ createdAt: -1 }); // Mengurutkan berdasarkan waktu terbaru
    return NextResponse.json({ success: true, comments }, { status: 200 });
  } catch (error: unknown) {
    console.error("Failed to fetch comments:", error);
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: "Unknown error occurred" }, { status: 500 });
  }
}

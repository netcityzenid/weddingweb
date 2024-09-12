import { NextResponse } from "next/server";
import Komen from "@/app/models/Komen";
import dbConnect from "@/app/utils/database";

export async function GET() {
  try {
    await dbConnect();
    const comments = await Komen.find().sort({ createdAt: -1 });
    console.log("Fetched comments:", comments); // Tambahkan logging
    const response = NextResponse.json(comments, { status: 200 });
    response.headers.set("Cache-Control", "no-store"); // Nonaktifkan caching
    return response;
  } catch (error: unknown) {
    console.error("Failed to fetch comments:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: "Failed to fetch comments", error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}

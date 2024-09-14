import connectToDatabase from "../../utils/mongodb";
import FormData from "../../models/FormData";

export async function POST(request: Request) {
  await connectToDatabase();

  const { name, hobby } = await request.json();

  const newData = new FormData({
    name,
    hobby,
  });

  await newData.save();

  return new Response(JSON.stringify(newData), { status: 201 });
}

export async function GET() {
  await connectToDatabase();

  const data = await FormData.find().sort({ submittedAt: -1 });

  return new Response(JSON.stringify(data), { status: 200 });
}

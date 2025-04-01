import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    
    // Simulate backend signup logic
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

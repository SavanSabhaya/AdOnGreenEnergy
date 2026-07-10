import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the submission payload
    console.log("Contact Form Submission Received:", data);

    /* 
     * TODO: Replace this mock handler with a call to the real NestJS 
     * backend endpoint once provided. 
     * Expected integration: POST to [NESTJS_API_URL]/contact with the same payload shape.
     */

    // Mock network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

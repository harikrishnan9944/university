import { NextResponse } from "next/server";
import RegisterForm from "../../../../moduls/Register_form";
import db from "../../../../libs/db";

export async function POST(req: Request) {
  try {
    await db();

    const data = await req.json();

    const email_existing = await RegisterForm.findOne({ email: data.email });
    const roll_no_existing = await RegisterForm.findOne({
      rollNo: data.rollNo,
    });
    if (email_existing && roll_no_existing) {
      return NextResponse.json(
        { success: false, message: "Email Or Roll_number already exists" }
      );
    }

    const sent = new RegisterForm(data);
    await sent.save();

    return NextResponse.json({ success: true, data: sent }, { status: 201 });
  } catch (error: any) {
    console.error("Error in POST /register:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

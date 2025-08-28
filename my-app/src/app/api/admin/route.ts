import { NextRequest, NextResponse } from "next/server";
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
        // { status: 400 }
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


export async function GET() {
  try {
    await db();
    const data = await RegisterForm.find();

    return NextResponse.json(
      {
        data: data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {}
}

export async function DELETE(req: NextRequest) {
  try {
    await db();

    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const deletes = await RegisterForm.findOneAndDelete({ email });

    if (!deletes) {
      return NextResponse.json(
        { success: false, message: "No record found with this email" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Deleted successfully", data: deletes },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}

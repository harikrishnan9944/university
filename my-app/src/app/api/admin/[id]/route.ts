import { NextRequest, NextResponse } from "next/server";
import RegisterForm from "../../../../../moduls/Register_form";
import db from "../../../../../libs/db";

export async function PUT(req: NextRequest, { params }: any) {
  try {
    await db();
    const { id } = params;
    const data = await req.json();

    const update = await RegisterForm.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      data: update,
    });
  } catch (error) {}
}



export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    await db();
    const { id } = params;

    const data = await RegisterForm.findById(id); 

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}


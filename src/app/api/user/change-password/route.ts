import { IUser, User } from "@/modals/user";
import { IRequest, auth } from "../../middleware/auth";
import { NextResponse } from "next/server";
import { CustomError } from "../../errors/custom-error";
import { Password } from "@/utils/Password";

export async function PUT(req: IRequest) {
  try {
    await auth(req);

    // body
    const body = (await req.json()) as IUser;

    // result
    await User.findByIdAndUpdate(
      { _id: req.user?.id! },
      { $set: { password: Password.hash(body.password) } }
    );

    return NextResponse.json({
      id: req.user?.id!,
      message: "Password changed successfully!",
    });
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

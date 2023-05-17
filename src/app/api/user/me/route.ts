import { NextResponse } from "next/server";
import { CustomError } from "../../errors/custom-error";
import { IRequest, auth } from "../../middleware/auth";
import { IUser, IUserDoc, User } from "@/modals/user";

/**
 *
 * @param req
 * @returns
 */
export async function GET(req: IRequest) {
  try {
    await auth(req);
    const user = (await User.findById(req.user?.id!)) as IUserDoc;
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

export async function PUT(req: IRequest) {
  try {
    await auth(req);

    // body
    const body = (await req.json()) as IUser;

    // result
    const result = await User.findByIdAndUpdate(
      { _id: req.user?.id! },
      { $set: body }
    );

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

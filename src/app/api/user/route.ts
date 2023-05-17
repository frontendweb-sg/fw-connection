import { IUserDoc, User } from "@/modals/user";
import { IRequest, auth } from "../middleware/auth";
import { NextResponse } from "next/server";
import { CustomError } from "../errors/custom-error";
import { admin } from "../middleware/admin";

/**
 * User route
 * @param req
 * @returns
 */
export async function GET(req: IRequest) {
  try {
    await auth(req);
    await admin(req);

    const users = (await User.find()) as IUserDoc[];

    return NextResponse.json(
      users.filter((user: IUserDoc) => user.id.toString() !== req.user?.id!)
    );
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

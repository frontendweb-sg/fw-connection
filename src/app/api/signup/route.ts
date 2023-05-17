import { connectDb } from "@/db";
import { IUser, User } from "@/modals/user";
import { NextResponse } from "next/server";

/**
 * Signup
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  await connectDb();
  const body = (await req.json()) as IUser;

  const hasUser = await User.findOne({ email: body.email });
  if (hasUser) {
    throw new Error("User already existed, Please login");
  }

  const newUser = new User(body);
  const result = await newUser.save();
  return NextResponse.json(result);
}

import { connectDb } from "@/db";
import { IUser, IUserDoc, User } from "@/modals/user";
import { Jwt } from "@/utils/Jwt";
import { Password } from "@/utils/Password";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDb();
  const body = (await req.json()) as IUser;

  const user = (await User.findOne({ email: body.email })) as IUserDoc;
  if (!user) {
    throw new Error("User not existed, Please register with us");
  }

  let verify = Password.compare(body.password, user.password);
  if (!verify) {
    throw new Error("Password not matched, please check your password");
  }

  user.token = Jwt.genToken({
    email: user.email,
    id: user.id,
  });

  return NextResponse.json(user);
}

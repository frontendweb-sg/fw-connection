import { User } from "@/modals/user";
import { IRequest } from "./auth";
import { AuthError } from "../errors/auth-error";
import { NextResponse } from "next/server";

export const admin = async (req: IRequest) => {
  const user = await User.findById(req.user?.id!);
  if (user && user.role !== "admin") {
    throw new AuthError("You have no access of this route " + req.url);
  }
  NextResponse.next(req);
};

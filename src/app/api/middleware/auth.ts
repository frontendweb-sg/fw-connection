import { Jwt } from "@/utils/Jwt";
import { NextResponse } from "next/server";
import { AuthError } from "../errors/auth-error";

export interface UserPayload {
  email: string;
  id: string;
}

export interface IRequest extends Request {
  user?: UserPayload | null;
}

export const auth = async (req: IRequest) => {
  const header = req.headers;

  if (!header) {
    throw new AuthError();
  }

  let token = header.get("authorization")?.split(" ")[1];

  if (!token) {
    throw new AuthError();
  }

  let verify = Jwt.verifyToken(token!) as any;

  if (!verify) {
    throw new AuthError();
  }

  req.user = verify as UserPayload;

  NextResponse.next(req);
};

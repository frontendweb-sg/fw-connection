import { AuthError } from "@/app/api/errors/auth-error";
import jwt, { JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";

interface IOption extends SignOptions {}

const DEFAULT_OPTIONS: IOption = {
  expiresIn: "1h",
};

/**
 * Jwt class
 */
export class Jwt {
  static genToken(payload: JwtPayload, option: IOption = DEFAULT_OPTIONS) {
    return jwt.sign(payload, process.env.NEXTAUTH_SECRET!, option);
  }
  static verifyToken(token: string) {
    return jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET!,
      function (error, decoded) {
        if (error) throw new AuthError("Jwt expired!");
        return decoded;
      }
    );
  }
}

import jwt, { SignOptions } from "jsonwebtoken";

export function generateToken(userId: string) {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN ?? "7d") as SignOptions["expiresIn"],
  };

  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET!,
    options
  );
}
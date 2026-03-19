import jwt, { SignOptions } from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET as string;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

const secretOptions: SignOptions = {
  expiresIn: "15m",
}

const refreshOptions: SignOptions = {
  expiresIn: "1d",
}

export function generateSecretToken(payload: object) {
  return jwt.sign(payload, SECRET, secretOptions);
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, REFRESH_SECRET, refreshOptions)
}

export function verifySecretToken(token: string) {
  return jwt.verify(token, SECRET);
}

export function verifyRefreshToken(token: string) {
  jwt.verify(token, REFRESH_SECRET)
}
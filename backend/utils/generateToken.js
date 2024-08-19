import jwt from "jsonwebtoken";

import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-myflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
    httpOnly: true, // Prevent xss attacks cross=site scripting attacks
    sameSite: "strict", // CRF attacks cross-site request forgery attacks
    secure: ENV_VARS.NODE_ENV !== "development", // cookie will only be set in https in production
  });

  return token;
};

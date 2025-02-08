import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRETKEY,
    {
      expiresIn: process.env.ACCESS_EXPIRE,
    }
  );
}

export function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRETKEY, {
    expiresIn: process.env.REFRESH_EXPIRE,
  });
}

export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY);
  } catch (error) {
    return null;
  }
}
export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRETKEY);
  } catch (error) {
    return null;
  }
}

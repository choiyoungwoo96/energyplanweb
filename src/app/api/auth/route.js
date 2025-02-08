import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../../utils/jwt";

const user = { id: "abc", email: "abc@naver.com" };

const accessToken = generateAccessToken(user);
const decodedAccess = verifyAccessToken(accessToken);
const refreshToken = generateRefreshToken(user);
const decodedRefresh = verifyRefreshToken(refreshToken);

console.log("accessToken : ", accessToken);
console.log("decodedAccess : ", decodedAccess);
console.log("refreshToken : ", refreshToken);
console.log("decodedRefresh :", decodedRefresh);

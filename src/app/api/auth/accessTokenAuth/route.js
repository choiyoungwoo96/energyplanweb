import { NextResponse } from "next/server";
import { verifyAccessToken } from "../../../utils/jwt";
import { RefreshTokenAuth } from "../refreshTokenAuth/route";

export async function POST(req) {
  const Authorization = req.headers.get("Authorization");
  const accessToken = Authorization.split(":")[1];
  try {
    const decoded = await verifyAccessToken(accessToken);

    if (decoded) {
      return NextResponse.json({ message: "검증되었습니다" }, { status: 200 });
    }
    if (!decoded) {
      RefreshTokenAuth();
      return NextResponse.json({ message: "리프레시인증" });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "토큰 값이 없습니다" },
      { status: 500 }
    );
  }
}

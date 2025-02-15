import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function RefreshTokenAuth() {
  try {
    const refreshToken = (await cookies()).get("refreshToken");
    console.log(refreshToken);
    return NextResponse.json({ message: "성공하였습니다" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ message: "실패하였습니다" }, { status: 500 });
  }
}

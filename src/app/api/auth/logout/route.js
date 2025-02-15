import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const refreshToken = await cookies().get("refreshToken");
    return NextResponse.json(
      { message: "로그아웃 성공" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `refreshToken=; HttpOnly; path=/; Max-Age=0`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "로그아웃에 실패하였스니다" },
      { status: 500 }
    );
  }
}

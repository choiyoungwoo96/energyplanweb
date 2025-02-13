import bcryptjs from "bcryptjs";

import {
  //accessToken 발급
  generateAccessToken,
  //refreshToken 발급
  generateRefreshToken,
} from "../../../utils/jwt";

//dummy value 추후에 DATABASE와 연동할 예쩡
const users = [
  {
    id: "abc",
    password: bcryptjs.hashSync("1234", 10),
  },
];
//LOGIN POST request
export async function POST(req) {
  try {
    //클라이언트쪽에서 넘겨오는 id,password 값을 json형태로 변경
    const { id, password } = await req.json();

    const user = users.find((u) => u.id === id);
    //request.method가 post가 아닐시에 401 에러를 반환한다
    if (req.method !== "POST") {
      return Response.json({ message: "method 에러" }, { status: 401 });
    }
    //user에 값이 없거나 비밀번호가 다를경우에 403에러를 발생 시킴
    if (!user || !bcryptjs.compareSync(password, user.password)) {
      return Response.json({ message: "id,password error" }, { status: 403 });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return new Response(JSON.stringify({ accessToken }), {
      status: 200,
      headers: {
        "Set-Cookie": `refreshToken=${refreshToken};HttpOnly; Path=/; Max-Age=604800`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify(
        { message: "연결시패" },
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    );
  }
}

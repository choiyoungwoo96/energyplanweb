"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState({
    id: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("accessToken");
      setLogin(!!token);
      console.log("로그인 상태", !!token);
    };
    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, [login]);

  const onChange = (e) => {
    setLoginValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", loginValue);
      if (res.status === 200) {
        router.push("/");
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    } catch (error) {
      if (error.reponse?.status === 403) {
        console.log("아이디나 비밀번호를 잘못 입력하셨습니다.");
      } else {
        console.log("로그인 요청 오휴", error);
      }
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{
        backgroundImage: `url("/loginbackground.jpeg")`,
        backgroundColor: "black",
      }}
    >
      <div className="w-full max-w-[500px] h-full m-auto flex items-center justify-center">
        <form
          action=""
          className="w-full h-[600px] flex flex-col items-center justify-evenly gap-4 px-6 py-2  rounded-3xl"
        >
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="에너지플랜 로고입니다"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <input
            type="text"
            required
            placeholder="ID"
            className="w-full p-5 rounded-full outline outline-green-500"
            name="id"
            onChange={onChange}
          />
          <input
            type="password"
            required
            placeholder="PASSWORD"
            className="w-full p-5 rounded-full outline outline-green-500"
            name="password"
            onChange={onChange}
          />
          <button
            onClick={onSubmit}
            className="w-full p-5 bg-green-900 rounded-3xl text-white hover:bg-green-400 hover:text-gray-600"
          >
            Login
          </button>
          <button className="text-white hover:text-green-700">
            <Link href="/signup">아이디/비밀번호 찾기</Link>
          </button>
          <button className="text-white hover:text-green-700">
            <Link href="/signup">처음이신가요?회원가입을 이용해주세요</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

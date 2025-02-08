import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url("/signupbackground.jpeg")` }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <form
          className="w-[500px] h-[800px] p-8 gap-4 rounded-xl flex flex-col items-center justify-center"
          action=""
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
          <div className="w-full flex items-center justify-start bg-white p-4 rounded-3xl outline outline-green-500  relative">
            <label className="min-w-[125px]">아이디</label>
            <input className="py-2" type="text" placeholder="ID" />
            <button className="bg-green-900 px-4 py-2 rounded-2xl text-white absolute top-4 right-5">
              중복검사
            </button>
          </div>
          <div className="w-full flex items-center justify-start bg-white p-4 rounded-3xl outline outline-green-500 ">
            <label className="min-w-[125px]">비밀번호</label>
            <input
              className="py-2"
              type="text"
              placeholder="PASSWORD"
              required
            />
          </div>
          <div className="w-full flex items-center justify-start bg-white p-4 rounded-3xl outline outline-green-500 ">
            <label className="min-w-[125px]">비밀번호 확인</label>
            <input
              className="py-2"
              type="text"
              placeholder="PASSWORD"
              required
            />
          </div>
          <div className="w-full flex items-center justify-start bg-white p-4 rounded-3xl outline outline-green-500 ">
            <label className="min-w-[125px]">이메일</label>
            <input
              className="py-2"
              type="email"
              placeholder="xxxx@xxxx.com"
              required
            />
          </div>
          <div className="w-full flex items-center justify-start bg-white p-4 rounded-3xl outline outline-green-500 ">
            <label className="min-w-[125px]">전화번호</label>
            <input
              className="py-2"
              type="tel"
              placeholder="010-xxxx-xxxx"
              required
            />
          </div>
          <button className="w-full p-5 bg-green-900 rounded-3xl text-white hover:bg-green-400 hover:text-gray-600">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

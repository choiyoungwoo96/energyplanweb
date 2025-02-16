"use client";
import { useState } from "react";

function Inquire() {
  const [inquireValue, setInquireValue] = useState({
    inquiry_type: "",
    author_type: "",
    author_name: "",
    size_or_name: "",
    contact_number: "",
    email: "",
    address: "",
    inquiry_content: "",
  });
  const handleValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInquireValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquireValue),
      });
      const result = await response.json();
      console.log("서버 응답", result);
    } catch (error) {
      console.error("error :", error);
    }
  };
  return (
    // 상담 section backgroundImage
    <div
      className="w-screen h-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/inquire.jpg')" }}
    >
      {/* 뒷배경 검정 투명화 처리 */}
      <div className="absolute top-0 left-0  bg-black opacity-50 w-full h-full"></div>

      <div className="w-full max-w-[1200px] h-full m-auto">
        <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-8 ">
          <div className="relative w-screen h-full flex flex-col items-start justify-center text-white gap-8 col-span-1 lg:col-span-1 md:col-span-2 text-center">
            {/* 제목.소제목, 내용 등록 */}
            <div className="w-full text-4xl  font-extrabold">
              태양광 관련 문의 및 상담
            </div>
            <div className="w-full text-2xl font-semibold">
              설치부터 관리까지, 안전하고 효율적인 <br />
              태양광 시스템을 위한 최적의 솔루션!
            </div>
            <div className="w-full text-lg font-thin">
              태양광 설치를 고민하고 계신가요? <br />
              혹은 이미 설치된 태양광 시스템의 <br />
              상태를 점검하고 싶으신가요? <br />
              저희는 태양광 시스템에 대한 전문적인 상담과 <br />
              안전한 관리 서비스를 제공합니다. <br />
              <br />• 신규 설치: 효율적이고 경제적인 맞춤형 설계를 통해 최적의
              태양광 시스템을 안내해 드립니다.
              <br />
              <br />• 정기 점검 및 유지보수: 설치된 태양광 설비의 성능과
              안전성을 꼼꼼히 검토하여, 지속 가능한 에너지 환경을 유지하도록
              돕습니다.
              <br />
              <br />
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            action="/api/board"
            className="w-full p-6 rounded-lg bg-white bg-opacity-50 relative col-span-2"
          >
            <div className="grid grid-cols-4 relative gap-5  text-nowrap text-center ">
              <div className="col-span-4 w-full p-2 text-4xl text-white shadow-md flex items-center justify-center font-extrabold">
                태양광 문의하기
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label className="min-w-[75px]">문의유형</label>
                <select
                  name="inquiry_type"
                  onChange={handleValue}
                  className="w-full bg-white rounded-md p-3 focus:outline-green-500 shadow-2xl outline-none"
                >
                  <option value={"선택하세요"}>선택하세요</option>
                  <option value={"태양광설치"}>태양광 설치</option>
                  <option value={"유지보수"}>유지보수</option>
                </select>
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label className="min-w-[75px]">회사명/개인</label>
                <input
                  name="author_type"
                  onChange={handleValue}
                  placeholder="개인일 경우에는 개인으로 작성"
                  required
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label
                  name="author_name"
                  onChange={handleValue}
                  className="min-w-[75px]"
                >
                  성명
                </label>
                <input
                  name="author_name"
                  onChange={handleValue}
                  required
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label className="min-w-[75px]">용량/평수</label>
                <input
                  name="size_or_name"
                  onChange={handleValue}
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label className="min-w-[75px]">연락처</label>
                <input
                  name="contact_number"
                  onChange={handleValue}
                  type="tel"
                  placeholder="ex)010-xxxx-xxxx"
                  required
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-4 sm:col-span-2">
                <label className="min-w-[75px]">이메일</label>
                <input
                  name="email"
                  onChange={handleValue}
                  type="email"
                  placeholder="ex)hongildong@naver.com"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 justify-center col-span-4">
                <label className="min-w-[75px]"> 주소</label>
                <input
                  name="address"
                  onChange={handleValue}
                  type="adress"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-start justify-center gap-4 col-span-4">
                <label className="min-w-[75px]">문의내용</label>
                <textarea
                  name="inquiry_content"
                  onChange={handleValue}
                  placeholder="문의할 내용을 작성해주세요"
                  required
                  className="w-full h-[250px] p-3 focus:outline-green-500 shadow-2xl rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-6 col-span-4 bg-[#dc404a] text-white text-2xl rounded-lg cursor-pointer hover:bg-green-300 "
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Inquire;

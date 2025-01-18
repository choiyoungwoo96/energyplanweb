"use client";
import { useEffect } from "react";
import { useState } from "react";

function Inquire() {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.scrollY == 0) {
      setScroll(true);
      console.log(isScroll);
    } else return;
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/inquire.jpg')" }}
    >
      <div
        className={`absolute top-0 left-0  opacity-50 w-full h-full ${isScroll}`}
      ></div>
      <div className="w-[1440px] h-full m-auto">
        <div className="h-full flex items-center justify-between gap-8">
          <div className="relative flex flex-col w-full h-full items-start justify-center text-white gap-8">
            {/* 제목.소제목, 내용 등록 */}
            <div className="text-4xl font-bold">태양광 관련 문의 및 상담</div>
            <div className="text-2xl font-semibold">
              설치부터 관리까지, 안전하고 효율적인 태양광 시스템을 위한 최적의
              솔루션!
            </div>
            <div className="text-lg font-thin">
              태양광 설치를 고민하고 계신가요? 혹은 이미 설치된 태양광 시스템의
              상태를 점검하고 싶으신가요? <br />
              저희는 태양광 시스템에 대한 전문적인 상담과 안전한 관리 서비스를
              제공합니다. <br />• 신규 설치: 효율적이고 경제적인 맞춤형 설계를
              통해 최적의 태양광 시스템을 안내해 드립니다.
              <br />• 정기 점검 및 유지보수: 설치된 태양광 설비의 성능과
              안전성을 꼼꼼히 검토하여, 지속 가능한 에너지 환경을 유지하도록
              돕습니다.
            </div>
          </div>
          <div className="w-full px-4 py-10 rounded-lg bg-white bg-opacity-50 relative">
            <div className="grid grid-cols-4 relative gap-5  text-nowrap text-center ">
              <div className="col-span-4 w-full p-2 text-4xl text-white shadow-md flex items-center justify-center font-extrabold">
                태양광 문의하기
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">문의유형</label>
                <select className="w-full bg-white rounded-md p-3 focus:outline-green-500 shadow-2xl outline-none">
                  <option>태양광 설치</option>
                  <option>유지보수</option>
                </select>
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">회사명</label>
                <input
                  placeholder="개인일 경우에는 개인으로 작성"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">성명</label>
                <input className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"></input>
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">용량/평수</label>
                <input className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"></input>
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">연락처</label>
                <input
                  type="tel"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 col-span-2">
                <label className="min-w-[60px]">이메일</label>
                <input
                  type="email"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-center gap-4 justify-center col-span-4">
                <label className="min-w-[60px]"> 주소</label>
                <input
                  type="adress"
                  className="w-full rounded-md outline-none p-3 focus:outline-green-500 shadow-2xl"
                ></input>
              </div>
              <div className="flex items-start justify-center gap-4 col-span-4">
                <label>문의내용</label>
                <textarea className="w-full h-[250px] p-3 focus:outline-green-500 shadow-2xl rounded-lg"></textarea>
              </div>
              <button className="p-6 col-span-4 bg-green-900 text-white text-2xl rounded-lg cursor-pointer hover:bg-green-300 ">
                문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inquire;

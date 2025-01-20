import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="w-screen h-[250px] bg-[#323232] ">
        <div className="w-[1200px] h-full m-auto">
          <div className="w-full h-full grid grid-cols-[200px_650px_350px] gap-10">
            <div className="W-full h-full flex items-center justify-center">
              <img className="w-[100px] h-[100px]" src="/logo.png"></img>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-center gap-2">
              <p className="text-white text-2xl ">에너지플랜</p>
              <div className="flex items-center justify-start gap-4 text-gray-400">
                <p>대표 : 강성묵</p>
                <p>E-mail : alsrkd@naver.com</p>
                <p>사업자등록번호 : 422-87-03644</p>
              </div>
              <div>
                <div className="flex items-center justify-start">
                  <p className="min-w-[75px] text-white">본사</p>
                  <p className="text-gray-400">
                    서울특별시 강서구 마곡중앙로 161-8, 두산더랜드파크 B동 515호
                  </p>
                </div>
                <div className="flex items-center justify-start">
                  <p className="min-w-[75px] text-white">청주지사</p>
                  <p className="text-gray-400">
                    충청북도 청주시 청원구 공항로 228,202호
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-end justify-center gap-4">
              <button className="bg-transparent border border-gray-400 text-gray-400 rounded-lg w-[100px] h-[35px]">
                <Link href="/admin">admin</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

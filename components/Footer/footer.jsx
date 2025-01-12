function Footer() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/inquire.jpg')" }}
    >
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
      <div className="w-[1200px] h-full m-auto">
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

          <div className="grid grid-cols-2 relative w-full gap-8 px-4 py-8 text-nowrap text-center rounded-lg bg-white bg-opacity-50">
            <div className="flex items-center gap-4">
              <label className="min-w-12">문의유형</label>
              <select className="w-full bg-white rounded-md p-2 outline-none">
                <option>태양광 설치</option>
                <option>유지보수</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label>회사명</label>
              <input
                placeholder="개인일 경우에는 개인으로 작성"
                className="w-full rounded-md outline-none p-2"
              ></input>
            </div>
            <div className="flex items-center gap-4">
              <label className="min-w-12">성명</label>
              <input className="w-full rounded-md outline-none p-2"></input>
            </div>
            <div className="flex items-center gap-4">
              <label className="min-w-12">용량/평수</label>
              <input className="w-full rounded-md outline-none p-2"></input>
            </div>
            <div className="flex items-center gap-4">
              <label className="min-w-12">연락처</label>
              <input
                type="number"
                className="w-full rounded-md outline-none p-2"
              ></input>
            </div>
            <div className="flex items-center gap-4">
              <label className="min-w-12">용량/평수</label>
              <input
                type="email"
                className="w-full rounded-md outline-none p-2"
              ></input>
            </div>
          </div>
          <div>
            <div className="gird grid-cols-1">
              <label className="min-w-12"> 주소</label>
              <input type="adress w-full rounded-md outline-none p-2"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

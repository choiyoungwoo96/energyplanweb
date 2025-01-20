"use client";
function Notice() {
  async function getServerConnection() {
    const res = await fetch("http://127.0.0.1:3001/data");
    const data = await res.json();
    return data;
  }
  async function handleClick() {
    const data = await getServerConnection();
    console.log(data);
  }
  const noticeItem = [
    {
      category: "공지",
      title: "에너지플랜 컨소시엄1",
      desc: "에너지플랜와 한화시스템, LG헬로비전, 교보리얼코, UNITEST 등과컨소시엄을 맺었습니다.",
      date: "2024-01-02",
    },
    {
      category: "긴급",
      title: "에너지플랜 컨소시엄2",
      desc: "에너지플랜와 한화시스템, LG헬로비전, 교보리얼코, UNITEST 등과컨소시엄을 맺었습니다.",
      date: "2024-01-02",
    },
    {
      category: "소식",
      title: "에너지플랜 컨소시엄3",
      desc: "에너지플랜와 한화시스템, LG헬로비전, 교보리얼코, UNITEST 등과컨소시엄을 맺었습니다.",
      date: "2024-01-02",
    },
    {
      category: "블로그",
      title: "에너지플랜 컨소시엄4",
      desc: "에너지플랜와 한화시스템, LG헬로비전, 교보리얼코, UNITEST 등과컨소시엄을 맺었습니다.",
      date: "2024-01-02",
    },
  ];
  return (
    <div className="w-screen p-[50px]">
      <div className="w-[1200px] m-auto flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-3xl text-[#393939] font-semibold">
            News & Notice
          </div>
          <div className="text-lg text-gray-400 font-thin">
            (주)에너지플랜 최근소식 및 공지사항을 전달드립니다
          </div>
          <button className="border border-gray-400 rounded-lg py-1 px-4">
            More
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {noticeItem.map((noticeitem, index) => (
            <div key={noticeitem.title} onClick={handleClick}>
              <div
                key={noticeitem.index}
                className="flex flex-col gap-5 p-8 rounded-lg border border-x-gray-400 cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-gray-100"
              >
                <div className="text-sm text-green-900 font-semibold">
                  {noticeitem.category}
                </div>
                <div className="text-lg text-[#393939] font-bold">
                  {noticeitem.title}
                </div>
                <div className="text-sm text-gray-400 font-thin">
                  {noticeitem.desc}
                </div>
                <div className="text-sm text-gray-400 font-thin">
                  {noticeitem.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Notice;

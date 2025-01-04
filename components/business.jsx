import Link from "next/link";

function Business() {
  const businessItem = [
    {
      title: "RPS",
      description: "전력 판매를 통한 고수익을 창출해보세요",
      button: "바로가기",
      path: "/business",
      bg: "/ipp.jpeg",
    },
    {
      title: "임대사업",
      description: "기초 비용없이 임대료 수익을 창출해보세요",
      button: "바로가기",
      path: "/business",
      bg: "/rent.jpg",
    },
    {
      title: "RE100",
      description: "자가소비를 통한 탄소중립 달성해보세요",
      button: "바로가기",
      path: "/business",
      bg: "/re.jpg",
    },
    {
      title: "전기료감축",
      description: "매년 올라가는 전기료에 대비하세요",
      button: "바로가기",
      path: "/business",
      bg: "/factory.jpeg",
    },
  ];
  return (
    <div className="w-[1200px] m-auto">
      <div className="pt-[140px] pb-8">
        <p className="text-4xl font-bold">태양광 사업의 종류</p>
        <p className="text-2xl text-gray-500">
          Introduction to solar energy business
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {businessItem.map((businessitem, index) => (
          <li key={index}>
            <div
              className="p-8 h-[500px] rounded-[5%] relative bg-cover"
              style={{
                backgroundImage: `url(${businessitem.bg})`,
              }}
            >
              <div className="absolute z-10">
                <div
                  key={index++}
                  className="text-3xl text-[#2d6a4f] font-bold z-30"
                >
                  {businessitem.title}
                </div>
                <div key={index++} className="text-xl mt-[5px] text-gray-700">
                  {businessitem.description}
                </div>
              </div>
              <button
                key={index++}
                className="bg-green-900 p-4 text-white rounded-[10px] absolute bottom-[30px] right-[30px] z-10"
              >
                <Link href={businessitem.path}>{businessitem.button}</Link>
              </button>

              <div className="absolute top-0 left-0 bg-white opacity-30 w-full h-full rounded-[5%]"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Business;

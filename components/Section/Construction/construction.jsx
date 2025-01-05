import ConstructionSwiper from "./constructionSwiper";

function Construction() {
  return (
    <>
      <div className="w-full max-w-[1200px] m-auto">
        <div className="pt-[140px] pb-8 flex items-end justify-between">
          <div>
            <div className="text-4xl font-bold">시공사례</div>
            <div className="text-2xl text-gray-500">Construction case</div>
          </div>
          <div className="flex gap-4">
            <button className="w-[75px] h-[45px] bg-green-900 text-white rounded-lg swiper-button-prev">
              이전
            </button>
            <button className="w-[75px] h-[45px] bg-green-900 text-white rounded-lg swiper-button-next">
              다음
            </button>
          </div>
        </div>
        <ConstructionSwiper></ConstructionSwiper>
      </div>
    </>
  );
}
export default Construction;

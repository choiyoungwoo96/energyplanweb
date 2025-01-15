function Profit() {
  return (
    <div className="w-screen h-full bg-gray-200">
      <div className="w-full max-w-[1200px] m-auto py-[50px]">
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-bold">수익률 계산기</div>
          <div className="text-xl text-gray-500">
            Return on Inverstment (ROI) Calcaulator
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[65px] gap-y-[25px] mt-4">
          <div className="flex flex-col gap-3">
            <div className="text-2xl">태양광 설치용량</div>
            <input className="w-full border border-green-900 px-4 py-6 rounded-lg text-2xl"></input>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl ">연간발전량</div>
            <div className="w-full bg-green-500 rounded-lg px-4 py-6 flex items-center justify-center text-3xl text-white">
              200MW
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl ">월수익</div>
            <div className="w-full bg-green-500 rounded-lg px-4 py-6 flex items-center justify-center text-3xl text-white">
              10,000,000원
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl">REC가중치</div>
            <input className="w-full border border-green-900 px-4 py-6 rounded-lg text-2xl"></input>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl ">연수익</div>
            <div className="w-full bg-green-500 rounded-lg px-4 py-6 flex items-center justify-center text-3xl text-white">
              100,000,000원
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-2xl ">연간발전량</div>
            <div className="w-full bg-green-500 rounded-lg px-4 py-6 flex items-center justify-center text-3xl text-white">
              1,000,000,000원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profit;

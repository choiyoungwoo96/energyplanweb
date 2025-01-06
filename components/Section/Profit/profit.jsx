function Profit() {
  return (
    <div className="w-screen h-full bg-gray-300 mt-[100px]">
      <div className="w-full max-w-[1200px] m-auto">
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-bold">수익률 계산기</div>
          <div className="text-xl text-gray-500">
            Return on Inverstment (ROI) Calcaulator
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl">태양광 설치용량</div>
            <input></input>
          </div>
          <div>
            <div>연간발전량</div>
            <div>200MW</div>
          </div>
          <div>
            <div>월수익</div>
            <div>200MW</div>
          </div>
          <div>
            <div>REC가중치</div>
            <input></input>
          </div>
          <div>
            <div>연수익</div>
            <div>100,000,000원</div>
          </div>
          <div>
            <div>20년수익</div>
            <div>1,000,000,000원</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profit;

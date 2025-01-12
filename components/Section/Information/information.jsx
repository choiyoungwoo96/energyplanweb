function Information() {
  return (
    <div className="w-full max-w-[1200px] m-auto">
      <div className="flex flex-col gap-4 py-[50px]">
        <div className="flex items-center justify-start gap-5">
          <div>
            <div className="text-4xl">SMP/REC 정보</div>
            <div className="text-xl text-gray-500">SMP/REC infomation</div>
          </div>
          <div className="flex gap-2">
            <select className="border border-green-950 px-4">
              <option>가중치0.7</option>
              <option>가중치1.0</option>
              <option>가중치1.2</option>
              <option>가중치1.5</option>
            </select>
            <div className="flex">
              <span className="border border-green-950 px-4 py-1">통합</span>
              <span className="border border-green-950 px-4 py-1">육지</span>
              <span className="border border-green-950 px-4 py-1">제주</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 ">
              <div className="px-10 py-2 text-2xl  bg-green-500 text-white rounded-lg flex items-center justify-center">
                SMP
              </div>
              <div className="text-xl text-green-900">2024.12.30(월)</div>
            </div>
            <div className="w-full flex items-center justify-center border border-green-900 rounded-lg py-5 text-4xl text-green-900">
              120.32원/KWh
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 ">
              <div className="px-10 py-2 text-2xl  bg-green-500 text-white rounded-lg flex items-center justify-center">
                REC
              </div>
              <div className="text-xl text-green-900">2024.12.30(월)</div>
            </div>
            <div className="w-full flex items-center justify-center border border-green-900 rounded-lg py-5 text-4xl text-green-900">
              73,200원/REC
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 ">
              <div className="px-4 py-2 text-2xl  bg-green-500 text-white rounded-lg flex items-center justify-center">
                SMP+REC
              </div>
              <div className="text-xl text-green-900">가중치 1.5 적용</div>
            </div>
            <div className="w-full flex items-center justify-center border border-green-900 rounded-lg py-5 text-4xl text-green-900">
              230.12원/KWh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

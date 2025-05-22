import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-between px-52 w-screen h-screen bg-[#FFB22C]">

      <div className="flex relative w-[300px] h-[350px]">
        {/* Card 1 */}
        <div className="absolute w-[300px] h-[350px] bg-white rounded rotate-[-4deg] z-1 shadow-lg">
          <div className="absolute w-[280px] h-[300px] bg-slate-300 top-2.5 left-2.5 rounded"></div>
          <span className="absolute text-sm font-medium text-slate-500 bottom-3 left-1/2 -translate-x-1/2">
            portrait of me! 😊
          </span>
        </div>

        {/* Card 2 (Stacked Behind) */}
        <div className="absolute w-[300px] h-[350px] bg-white rounded rotate-[4deg] shadow-lg">
          <div className="absolute w-[280px] h-[300px] bg-slate-300 top-2.5 left-2.5 rounded"></div>
        </div>
      </div>

      <div className="flex relative w-[600px] h-[550px]">
        <div className="absolute top-0 flex w-[500px] h-[550px] bg-white rounded shadow-lg rotate-2">
        </div>

        <div className="absolute right-10 flex w-[120px] h-[40px] bg-black/80 rounded shadow-lg rotate-[28deg]">
        </div>
      </div>
    </div>
  );
};

export default Page;

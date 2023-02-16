import React from "react";
export interface ITimeBox {
  time: string;
}
export const TimeBox = ({ time }: ITimeBox) => {
  return (
    <div className="border-[1px] hover:text-yellow hover:bg-yellow hover:bg-opacity-25 hover:border-yellow border-gray-400 text-black-secondary 
    font-bold w-full xs:w-32 md:w-36 lg:w-42 h-10 px-4 py-6 rounded-lg flex justify-center items-center active:bg-primary focus:bg-primary">
      {time}
    </div>
  );
};

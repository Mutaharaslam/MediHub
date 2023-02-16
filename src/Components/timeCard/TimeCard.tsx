import React from "react";
import { TimeBox } from "./TimeBox";
import { timeData } from "./timeData";
import Chevron from "../../Components/svgComponents/chevron";
import evening from "../../assets/imgs/Ellipse.png";

export const TimeCard = () => {

  const sideScroll = (
    element: any,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const contentWrapper = React.useRef(null);

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg ">
      <div className="flex justify-between mx-3 mt-5 mb-2">
        <div onClick={() => { sideScroll(contentWrapper.current, 25, 100, -10); }}>
          <Chevron width={14} height={18} color='black' customClass="inline-block mx-2 rotate-180" /></div>
        <div className="flex justify-between w-3/4 overflow-auto whitespace-nowrap pb-2" ref={contentWrapper}>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Today, 14</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Tue, 15</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Wed, 16</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Thus, 17</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Fri, 18</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Sat, 19</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Mon, 20</span>
          <span className="inline-block min-w-[50%] md:min-w-[25%] hover:text-primary">Tue, 21</span>
        </div>
        <div onClick={() => { sideScroll(contentWrapper.current, 25, 100, 10); }}>
          <Chevron color='black' width={14} height={18} customClass="inline-block mx-2" /></div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-center my-7">
        <div className="flex w-4/5 ">
          <img width={24} src={evening} alt="" />
          <span className="pl-2">Evening Slots</span>
          <Chevron color='black' width={8} height={12} customClass="inline-block mx-2 rotate-90" />
        </div>

      </div>

      <div className="flex justify-center  my-7">
        <div className="flex flex-wrap  gap-5 w-4/5 ">
          {timeData.map((item, key) => {
            return <TimeBox time={item.time} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

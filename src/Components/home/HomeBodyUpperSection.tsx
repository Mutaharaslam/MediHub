import useWindowDimensions from "../../hooks/Dimensions";
import { StraightLine } from "../line";
import { VerticaLine } from "../verticalLine/VerticaLine";
import mobilescreen from "../../assets/imgs/mobile-screen.png";

export const HomeBodyUpperSection = () => {
  const { windowDimensions } = useWindowDimensions();

  const lineWidth = () => {
    if (windowDimensions.width < 450) return "w-32";
    if (windowDimensions.width < 700) return "w-52";
    return "w-96";
  };
  return (
    <div className="flex lg:justify-between flex-col lg:flex-row">
      {/* Left */}
      <div className="bg-homepagedoctor bg-cover bg-left-top bg-no-repeat w-full lg:w-[65%] relative">
        <div className="bg-Bg bg-cover bg-left-top h-full w-full">
          {/* Inner Content */}
          <div className="pt-36 pl-4 md:pl-[10%] lg:pl-[14%] flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <StraightLine width={lineWidth()} />
              <p className="text-gray-200 text-[.5rem] sm:text-[.6rem] w-9/12 sm:w-1/2 md:w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
            </div>
            <div className="flex pl-0 md:pl-8">
              <div className="w-4/12 sm:w-1/3 md:w-2/5 lg:w-6/12">
                <h1 className="font-semibold font-sans text-[0.6rem] text-lg xs:text-xl md:text-2xl 
                    lg:text-5xl xl:text-7xl my-48 sm:my-80 text-white">
                  Find the
                  Right Doctor
                  right at your Fingertips
                </h1>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex h-28 mr-4 xl:mr-2 gap-x-2 mb-4">
                <div className="flex items-end  justify-end">
                  {/* <p className="text-gray-200 text-[.6rem] w-80"> */}
                  <p className="text-gray-200 text-[.5rem] sm:text-[.6rem] w-9/12 sm:w-1/2 md:w-80 text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>

                <VerticaLine extraClasses="bg-gray-200 w-[2px]" />
              </div>
            </div>
          </div>

          {/* Mobile Screen */}
          <div className="absolute top-52 sm:top-60 right-0 xs:right-2 md:right-4 lg:right-[-200px] lg:max-w-[400px] md:max-w-[350px] max-w-[240px]">
            <img src={mobilescreen} alt="mobile" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="bg-transparent w-full md:w-4/12 pt-4 lg:pt-72 pl-8 lg:pl-44">
        <div className="flex lg:flex-row flex-col  h-auto lg:h-48 mr-2 lg:gap-x-2 gap-y-2">
          <VerticaLine extraClasses="bg-gray-200 w-[2px] lg:block hidden" />
          <div className="lg:hidden block">
            <StraightLine width={lineWidth()} />
          </div>
          <div className="flex items-end">
            <p className="text-gray-200 text-[.6rem] 3xl:text-sm lg:w-40 3xl:w-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Menu } from "../../Components/menu/index";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import Footer from "../../Components/footer";
import { Slider } from "../../Components/slider/Slider";
import { HomeBody } from "../../Components/home/HomeBody";
import arrowDown from "../../assets/svgs/arrowDown.svg";
import { HomeLowerSection } from "../../Components/home/HomeLowerSection";
import { FAQ } from "../../Components/FAQ/FAQ";

const Home: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <HeroSection
        children={
          <div className="text-center pt-44 mb-60">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">MediHub</h1>
            <h6 className="text-orange-primary text-sm sm:text-lg lg:text-xl font-normal">FULLY IMMERSED HEALTHCARE</h6>
          </div>
        }
      />
      <div className="bg-black-primary h-full w-full relative mt-5">
        <Menu />
        <HomeBody />
        <div className="flex justify-center container mx-auto">
          <div className="w-full flex flex-col items-center">
            <div
              className="flex justify-center my-10 "
              style={{ transform: `${show ? "" : " rotate(180deg)"} ` }}
              onClick={() => setShow(!show)}
            >
              <img width={80} src={arrowDown} alt="arrowDown" />
            </div>
            {show ? (
              <div className=" h-full w-full flex justify-center mb-10 ">
                <Slider />
              </div>
            ) : null}
            <div className="flex justify-center">
              <HomeLowerSection />
            </div>
            <div>
              <FAQ />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

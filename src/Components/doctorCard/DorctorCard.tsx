import React, { useState } from "react";
import picImg from "../../assets/imgs/userImg.png";
import useWindowDimensions from "../../hooks/Dimensions";
import { Button } from "../Button";
import { Emailmodal } from "../Modals/eamail/Emailmodal";
import { VerticaLine } from "../verticalLine/VerticaLine";
import { AppoinmentBtn } from "./AppoinmentBtn";

export const DorctorCard = () => {
  const [show, setShow] = useState(false);
  const { windowDimensions } = useWindowDimensions();
  return (
    <div className="flex justify-center bg-secondary rounded-lg shadow-md  relative">
      {<Emailmodal showModal={show} setShowModal={setShow} />}
      <div className="flex justify-center flex-col w-full p-6">
        <div className="flex flex-col md:flex-row gap-5 lg:items-center w-full lg:justify-between  ">
          <div className="flex flex-col md:flex-row justify-between  md:mb-6">
            <div className="w-36 h-36 rounded-full overflow-hidden mr-6">
              <img src={picImg} className='w-full' alt="Doctor's Profile  " />
            </div>
            <div className=" text-black-secondary">
              <h3 className="font-semibold text-lg ">Assist. Prof. Dr. Jane Doe</h3>
              <p className="text-sm text-gray-800 font-normal">Gynecologist, Fertility Consultant,</p>
              <p className="text-sm text-gray-800 font-normal">
                Obstetrician MRCOG, FACOG, FCPS, M.C.P.S,
                Diploma  in IVF,
                Membership
              </p>
              <div className="flex mt-5">
                <div className=" flex flex-col  sm:flex-row  sm:gap-2">
                  <div className="mr-3 mb-2">
                    <h1 className="font-bold text-gray-800">Under 15 Min</h1>
                    <p className="text-xs">Wait Time</p>
                  </div>
                  {windowDimensions.width > 640 ? <VerticaLine /> : null}
                  <div className="md:mx-3 mb-2">
                    <h1 className="font-bold">16 Years</h1>
                    <p className="text-xs">Experience</p>
                  </div>
                  {windowDimensions.width > 640 ? <VerticaLine /> : null}
                  <div className="md:ml-3 mb-2">
                    <h1 className="font-bold">100% (263)</h1>
                    <p className="text-xs">Satisfied Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start  h-full mb-6">
            <Button
              label="Video Consultation"
              className="bg-yellow right-0 top-0 font-sans text-white  text-center py-3 px-8 rounded-md inline-flex items-center shadow-lg  "
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
        <h6 className="mb-4">Latest Review</h6>
        <div className="bg-gray-500 sm:w-1/2 rounded-lg mb-6 relative">
          <span className="h-0 absolute rounded-md left-[calc(100%-20px)] bottom-0 w-0 border-x-[16px] border-x-transparent border-b-[16px] border-gray-500"></span>
          <p className="text-xs my-3 md-3 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="my-6 flex flex-col md:flex-row gap-5 justify-center md:justify-start">
          <AppoinmentBtn Availablity="Available tomorrow" fee="Rs. 3,000" />
          <AppoinmentBtn Availablity="Available Tuesday" fee="Rs. 3,000" />
        </div>
      </div>
    </div>
  );
};

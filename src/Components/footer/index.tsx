import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/Dimensions";
import { Logo } from "../svgComponents/Logo";

const Footer = () => {
  const { windowDimensions } = useWindowDimensions();
  return (
    <div className=" bg-cover bg-center bg-footerBackground sm:h-80 ">
      <div className="flex flex-col sm:flex-row  justify-evenly  items-center h-full ">
        <div>
          <Logo width={(windowDimensions.width * 20) / 100} height={210} />
        </div>
        <div className="flex justify-around  text-xs sm:text-sm text-white ">
          <div>
            <ul className="sm:w-56 ">
              <li className=" px-4 py-2 ">
                <Link to="/walkingclinic" className="block mb-1">
                  Ask a doctor
                </Link>
              </li>
              <li className=" px-4 py-2">
                <Link to="/prescription" className="block mb-1">
                  online Chat with a doctor
                </Link>
              </li>
              <li className=" px-4 py-2">
                <Link to="/labtest" className="block mb-1">
                  Phone a doctor
                </Link>
              </li>
              <li className=" px-4 py-2 ">
                <Link to="/appoinmentbooking" className="block mb-1">
                  Video Conversation
                </Link>
              </li>

              <li className=" px-4 py-2">
                <Link to="/doctorlist" className="block mb-1">
                  Physician Directory
                </Link>
              </li>
              <li className=" px-4 py-2">Articles</li>
            </ul>
          </div>

          <div>
            <ul className="sm:w-56 ">
              <li className="px-4 py-2 ">Tools</li>
              <li className="px-4 py-2">Blogs</li>
              <li className="px-4 py-2">About Us</li>
              <li className="px-4 py-2 ">Terms</li>
              <li className="px-4 py-2 ">Privacy</li>
              <li className="px-4 py-2 ">Get MediHub App</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

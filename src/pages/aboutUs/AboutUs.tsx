import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";

export const AboutUSHero = () => {
  return (
    <div className="text-center mt-28 xs:mt-44 pb-32 xs:pb-40 w-4/6 md:w-2/6">
      <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold lg:text-5xl">
          The Best Medical Care You Can Get!
        </h1>
        <p className="text-secondary text-xs mt-6 mb-4  w-[85%] text-center font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <Link to="/doctorlist">
        <Button
          label="Make Appointment"
          className="bg-black-secondary text-sm md:text-base text-white  py-3 px-5 rounded-md inline-flex items-center shadow-xl"
        />
      </Link>
    </div>
  );
};

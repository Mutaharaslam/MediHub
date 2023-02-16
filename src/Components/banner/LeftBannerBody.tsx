import mobilescreen from "../../assets/imgs/mobile-screen.png";

export const LeftBannerBody = () => {

  return (
    <div className="flex flex-col  xs:justify-between items-center  ">
      <h1 className="text-xl xs:text-2xl md:text-4xl w-full md:w-1/2 text-secondary  mb-5 ">
        Here’s how to book an appointment:
      </h1>
      <div className="flex justify-center mb-5">
        <img src={mobilescreen} className='w-10/12 md:w-7/12' alt="mobile" />
      </div>
    </div>
  );
};

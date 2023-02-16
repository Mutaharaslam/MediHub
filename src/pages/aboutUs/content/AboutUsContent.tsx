import React from "react";
import { alignItem, ContentCard } from "../../../Components/contentCard";
import { ImageBox } from "../../../Components/image/ImageBox";
import { IContent } from "../../../types/types";

const AboutUsContentData: IContent = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  heading: "Your Go-To Online Medical Service Provider",
};
const DataAboutUsContent: IContent = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  heading: "Updated with the Latest Equipment",
};
export const AboutUsContent = () => {
  return (
    <div>
      <div className=" flex justify-center container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start items-center lg:justify-evenly w-full md:w-3/4 mt-16 mb-0">
          <ContentCard
            content={AboutUsContentData.content}
            heading={AboutUsContentData.heading}
            sm
            align={alignItem.left}
            topheading="About Us"
          />
          <div className="mt-4">
            <ImageBox customClasses="xl:w-64 w-56 xl:h-60 h-52 relative lg:top-0 lg:left-0 left-[-70px]" />
            <ImageBox customClasses="xl:w-64 w-56 xl:h-60 h-52 relative top-[-60px]  lg:right-[65%] right-[-70px]" />
          </div>
        </div>

      </div>
      <div className=" flex justify-center ">
        <div className="flex flex-col lg:flex-row justify-evenly xs:w-3/4 z-10 my-32 items-center ">
          <div className="lg:w-1/2 w-full flex justify-center">
            <ImageBox customClasses="lg:w-3/5 w-4/5 h-56" />
          </div>

          <ContentCard
            content={DataAboutUsContent.content}
            heading={DataAboutUsContent.heading}
            align={alignItem.left}
            topheading="About Us"
            xl
          />
        </div>
      </div>
    </div>
  );
};

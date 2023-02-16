import React from "react";
import { IContent } from "../../types/types";
export enum alignItem {
  "center" = "center",
  "left" = "left",
  "right" = "right",
}
interface IContentCard extends IContent {
  sm?: boolean;
  align?: alignItem;
  topheading?: string;
  ex?: boolean;
  xl?: boolean;
  w?: string;
  contentWidth?: string;
}
export const ContentCard: React.FC<IContentCard> = ({
  heading,
  content,
  align = alignItem.center,
  contentWidth = "",
}) => {
  return (
    <div
      className={`text-${align} sm:w-8/12 w-10/12   ${
        contentWidth !== "" ? "flex flex-col justify-center items-center" : ""
      }`}
    >
      <h1
        className="text-white font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6"
      >
        {heading}
      </h1>
      <p className="text-secondary md:text-sm text-xs ">
        {content}
      </p>
    </div>
  );
};

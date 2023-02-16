import { IContent } from "../../types/types";

export const LineContent: React.FC<IContent> = ({ heading, content }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-secondary  w-full my-10  ">
      <div className="w-full md:w-1/2">
        <h1 className="text-md md:text-2xl w-full md:w-11/12">{heading}</h1>
      </div>
      <div className="flex  mt-1 w-full md:w-1/2">
        <p className="text-[0.6rem] md:text-xs">{content}</p>
      </div>
    </div>
  );
};

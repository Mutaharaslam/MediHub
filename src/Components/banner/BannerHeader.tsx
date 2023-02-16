import React from "react";

export const BannerHeader = () => {
  return (
    <div className="bg-primary  text-black-secondary flex justify-center ">
      <div className="flex flex-col justify-center items-center w-3/5 my-10 lg:gap-10 md:gap-6 gap-4">
        <h1 className="text-xl sm:text-2xl lg:text-5xl font-extrabold text-center">
          How booking works.
        </h1>
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center">
          “How do I connect with a doctor online?”
        </h1>
        <p className="text-[0.7rem] md:text-sm text-center xs:w-4/5">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem reru.
        </p>
      </div>
    </div>
  );
};

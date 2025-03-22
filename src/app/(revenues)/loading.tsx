import React, { JSX } from "react";

export const Loading = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen">
        <h1 className={` text-5xl mb-20`}>Loading 
            <span className={`animate-spin`}>
              &#8230;
            </span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Loading;

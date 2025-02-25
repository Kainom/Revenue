import { ReactElement } from "react";


export const BallLoading = ():ReactElement => {
    return (
      <>
        <div className="bg-background-secondary flex justify-center w-full mt-5 rounded-sm py-1.5 gap-2">
          <span className="relative flex size-4 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
          </span>
          <span className="relative flex size-4 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
          </span>
          <span className="relative flex size-4 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
          </span>
        </div>
      </>
    );
}
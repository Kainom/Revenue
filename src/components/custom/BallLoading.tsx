import { ReactElement } from "react";


export const BallLoading = ({
  bg = "bg-background-secondary",
  size = "size-4",
  fatherClass,
  bgFirstSpan = "bg-sky-400",
  bgSecondSpan = "bg-sky-500",
}: {
  bg?: string;
  size?: string; // 1-8
  fatherClass?: string; // optional className for the father div
  bgFirstSpan?: string; // optional className for the first span
  bgSecondSpan?: string; // optional className for the second span
}): ReactElement => {
  fatherClass += " flex justify-center w-full  rounded-sm py-1.5 gap-2 ";
  return (
    <>
      <div className={`${bg} ${fatherClass}`}>
        <span className={`relative flex ${size}`}>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgFirstSpan} opacity-75`}></span>
          <span
            className={`relative inline-flex ${size} rounded-full ${bgSecondSpan}`}
          ></span>
        </span>
        <span className={`relative flex ${size}`}>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgFirstSpan} opacity-75`}></span>
          <span
            className={`relative inline-flex ${size} rounded-full ${bgSecondSpan}`}
          ></span>
        </span>
        <span className={`relative flex ${size} `}>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bgFirstSpan} opacity-75`}></span>
          <span
            className={`relative inline-flex ${size} rounded-full ${bgSecondSpan}`}
          ></span>
        </span>
      </div>
    </>
  );
};
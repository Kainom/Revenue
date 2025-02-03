import React, { ReactElement } from "react";

type PropsUser = {
  w?: string;
  h?: string;
  className?: string;
  fill?: string;
  stroke?: string;
};
export const Dollar = ({
  w = "24",
  h = "24",
  className,
  fill,
  stroke,
}: PropsUser): ReactElement => {
  if (!w || w === "") {
    w = "24";
  }
  if (!h || h === "") {
    h = "24";
  }

  if (!stroke) {
    stroke = "#212121";
  }
  if (!fill) {
    fill = "#212121";
  }
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${w}`}
        height={`${h}`}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-dollar-sign"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>

        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </React.Fragment>
  );
};

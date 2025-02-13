import React, { ReactElement } from "react";

type Props = {
  w?: string;
  h?: string;
  className?: string;
  fill?: string;
  stroke?: string;
};
export const Tag = ({
  w = "24",
  h = "24",
  className,
  fill,
  stroke,
}: Props): ReactElement => {
  if (!w || w === "") {
    w = "14";
  }
  if (!h || h === "") {
    h = "14";
  }

  if (!stroke) {
    stroke = "#FAFAFA";
  }
  if (!fill) {
    fill = "#FAFAFA";
  }
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 48 48"
      >
        <g fill="none">
          <path
            stroke={stroke}
            strokeLinejoin="round"
            strokeWidth="2.8"
            d="M42.17 29.245L29.262 42.151a3.6 3.6 0 0 1-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 0 1 0 5.075Z"
          />
          <path
            fill={fill}
            fillRule="evenodd"
            d="M18.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </React.Fragment>
  );
};

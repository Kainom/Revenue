"use client";
import React, { FC, ReactElement } from "react";

interface Propertie {
  properties: {
    width?: string;
    classN?: string;
    name?: string;
    id?: string;
    options: {
      text: string;
      value: string;
    } [];
  };
}

interface Label {
  text: string;
  classN?: string;
  width?: string;
}
interface Props {
  label?: Label;
  props: Propertie;
}
export const Select: FC<Props> = ({ props, label }): ReactElement => {
    const customClass: string = `
   bg-background-secondary border-border-dark border-sm
  outline-none px-2 pr-5 mt-2 py-[0.395rem] rounded-sm w-full transition-all 
  ease -in -out duration- 200 ${props.properties.classN} ${props.properties.width}`;
    
  const customLabel: string = `${label?.classN} ${label?.width}`;

  return (
    <React.Fragment>
      <div className="flex flex-col">
        {label && (
          <label className={`${customLabel}  ${label.width}`}>
            {label.text}
          </label>
        )}
        <select
          className={customClass}
          name={props.properties.name}
          id={props.properties.id}
        >
          {props.properties.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};

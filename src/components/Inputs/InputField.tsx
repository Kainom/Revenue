import React, { Children, ReactElement, ReactNode } from "react";

interface Propertie {
  properties: {
    type?: string;
    placeholder?: string;
    width?: string;
    classN?: string;
    id?: string;
    label?: {
      text: string;
      classN?: string;
      width?: string;
    };
  };
}

function padrao({ properties }: Propertie) {
  if (!properties.placeholder) properties.placeholder = "Some field";

  if (!properties.type) properties.type = "text";

  if (!properties.width) properties.width = "w-3/4";
}
export const InputField = ({ properties }: Propertie): ReactElement => {
  padrao({ properties });

  let classCustom: string =
    "border-sm border-border-dark py-1 px-4 rounded-sm text-zinc-50 bg-background-secondary";
  let customLabel: string = "mb-2";

  if (properties.label && properties.label.classN)
    customLabel += ` ${properties.label.classN}`;

  classCustom += ` ${properties.classN}`;
  return (
    <React.Fragment>
      {properties.label && (
        <label className={`${properties.label.classN}  ${properties.label.width}`}>
          {properties.label.text}
        </label>
      )}
      <input
        className={`${classCustom} ${properties.width}`}
        type={properties.type}
        placeholder={properties.placeholder}
        id={properties.id}
      ></input>
    </React.Fragment>
  );
};

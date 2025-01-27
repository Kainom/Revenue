import React, { ReactElement } from "react";

interface Propertie {
  properties: {
    type?: string;
    placeholder?: string;
    width?: string;
    classN?: string;
  };
}

function padrao({ properties }: Propertie) {
  if (!properties.placeholder) properties.placeholder = "Some field";

  if (!properties.type) properties.type = "text";

  if (!properties.width) properties.width = "w-3/4";
}
export const InputField = ({ properties }: Propertie): ReactElement => {
  padrao({ properties });

  let classCustom: string = " border-none py-1 px-4 rounded-sm ";

  classCustom += ` ${properties.classN}`;
  return (
    <React.Fragment>
      <input
        className={`${classCustom} ${properties.width}`}
        type={properties.type}
        placeholder={properties.placeholder}
      >
      </input>
    </React.Fragment>
  );
};

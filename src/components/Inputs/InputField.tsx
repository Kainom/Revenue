import React, { ReactElement } from "react";

interface Propertie {
  properties: {
    type: string;
    placeholder: string;
    width:number
  };
}

function padrao({ properties }: Propertie) {
  if (!properties.placeholder) properties.placeholder = "Some field";

  if (!properties.type) properties.type = "text";

  if (!properties.width) properties.width = 200;
}
export const InputField = ({ properties }: Propertie): ReactElement => {
  padrao({ properties });

  return (
    <React.Fragment>
      <input className="border-none py-1 px-4 rounded-sm my-4 w-2/4" width={properties.width} type={properties.type} placeholder={properties.placeholder} />
    </React.Fragment>
  );
};

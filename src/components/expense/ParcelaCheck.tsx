"use client";
import React, { ReactElement } from "react";
import { InputField } from "../Inputs/InputField";

export const ParcelaCheck = (): ReactElement => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <React.Fragment>
      <div className="flex items-center mb-2 justify-end">
        <input
          onChange={handleChange}
          id="installment"
          checked={checked}
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm    dark:bg-gray-700 dark:border-gray-600 border-none outline-none ap"
        />
        <label htmlFor="installment" className="ml-2 ">
          Is a installment?
        </label>
      </div>

      {checked && (
        <InputField
          properties={{
            type: "number",
            placeholder: "Enter with the number of installment",
            classN: "mb-4 border-border-light py-1.5",
            width: "w-full",
            name: "quantidadeDeParcela",
            label: {
              text: "Quantity",
              classN: "mb-2   flex text-sm font-bold ",
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

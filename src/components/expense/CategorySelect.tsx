"use client";
import React, { ReactElement } from "react";

/**
* This component is used to select the category of an expense.
* It is a select input with three options: Essential, Not Essential, and Luxury.

* @param {boolean} post - If true, the "All" option will be hidden.Because in backend doesn't accept this value.
* @param {string} category - The category to be selected by default. This is used when editing an expense.
* @returns {ReactElement} - A select input with the category options.
*/
export const CategorySelect = ({
  post = false,
  category, // for put operation.Get the category from the old expense to set the default value
}: {
  post?: boolean;
  category?: string;
}): ReactElement => {
  return (
    <React.Fragment>
      <select
        defaultValue={category}
        className="flex bg-background-secondary border-sm border-border-light outline-none px-3  mb-4 py-2 rounded-sm w-full transition-all ease-in-out duration-200 "
        name="category"
        id="categoryId"
      >
        <option value="Essential">Essential</option>
        <option hidden={post} value="All">
          All
        </option>
        <option value="Not Essential">Not Essential</option>
        <option value="Luxury">Luxury</option>
      </select>
    </React.Fragment>
  );
};

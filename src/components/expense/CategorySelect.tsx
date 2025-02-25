"use client";
import React, { ReactElement } from "react";

export const CategorySelect = ({
  post = false,
}: {
  post?: boolean;
}): ReactElement => {
  return (
    <React.Fragment>
      <select
        className="flex bg-background-secondary border-sm border-border-light outline-none px-4  mb-4 py-2 rounded-sm w-full transition-all ease-in-out duration-200"
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

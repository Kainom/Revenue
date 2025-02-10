"use client";
import React, { ReactElement} from "react";

export const CategorySelect = (): ReactElement => {
  return (
    <React.Fragment>
        <select className="flex bg-background-secondary border-sm border-border-light outline-none px-4  mb-4 py-2 rounded-sm w-full transition-all ease-in-out duration-200" name="category" id="categoryId">
            <option value="0">Select a category</option>
            <option value="1">All</option>
            <option value="2">Essencial</option>
            <option value="3">Not Essencial</option>
            <option value="4">Luxury</option>
        </select>
     
    </React.Fragment>
  );
};

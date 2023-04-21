import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { BrandList, BrandsState } from "../../../types/brand";
import "./BrandsFilter.css";

const BrandsFilter: React.FC = () => {
  const { brands, viewBrands } = useTypedSelector((state) => state.brand);

  const {
    addBrandToFilterAction,
    removeBrandFromFilterAction,
  } = useActions();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked 
      ? addBrandToFilterAction(Number(event.target.value))
      : removeBrandFromFilterAction(Number(event.target.value))
  }

  return (
    <>
      <div
        className="filterBrands"
        style={{ display: viewBrands === false ? "none" : "block" }}
      >
        {brands.map((el) => (
          <div key={el.id} className="brandsList">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              value={el.id}
            />
            <p> {el.title} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandsFilter;
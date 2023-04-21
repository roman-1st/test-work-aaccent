import React from "react";
import BrandsFilter from "./BrandsFilter/BrandsFilter";
import "./SearchSettingContainer.css";
import { useActions } from "../../hooks/useActions";

const SearchSettingContainer = () => {
    const { viewBrandsAction } = useActions()

    function viewBrand () {
        viewBrandsAction()
    }

  return (
    <div className="filterContainer">
      <h4 > Настройки поиска </h4>
      <p className="filterTitle" onClick={() => viewBrand()}> Бренды </p>
      <BrandsFilter />
      <p className="filterTitle"> Мужское / женское / детское</p>
      <p className="filterTitle"> Размеры </p>
      <p className="filterTitle"> По скидке </p>

    </div>
  );
};

export default SearchSettingContainer;

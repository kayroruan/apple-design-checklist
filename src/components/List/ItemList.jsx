import React, { useState } from "react";

import './ItemList.css'

const ItemList = ({ text, subtext = ""}) => {

  return (
    <div className="ItemList">
      <div className="itemContainer">
        <input type="checkbox" />
        <label>{text}</label>
      </div>
      <label className="opacity">{subtext && subtext}</label>
    </div>
  );
};

export default ItemList;
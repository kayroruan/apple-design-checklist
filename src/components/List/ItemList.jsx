import React from "react";

import './ItemList.css'

const ItemList = ({ text, subtext = "" }) => {
  return (
    <div className="ItemList">
      <div>
        <input type="checkbox" />
        <label>{text}</label><br></br>
      </div>
      <label className="opacity">{subtext && subtext}</label>
    </div>
  );
};

export default ItemList;
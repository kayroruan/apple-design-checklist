import React from "react";

import './List.css'

const List = ({ children, title }) => {
  return (
    <div className="List">
      <h2>{title}</h2>
      <div className="List-content">
        {children}
      </div>
      <button>Exportar CheckList</button>
    </div>
  );
};

export default List;
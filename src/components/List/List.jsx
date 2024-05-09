import React from "react";
import './List.css';
import html2pdf from 'html2pdf.js';

import MacLights from '../../assets/images/mac-lights.svg'


const List = ({ children, title }) => {
  const exportToPdf = (contentId) => {
    const content = document.getElementById(contentId);
    html2pdf(content);
  };

  return (
    <div className="List">
      <img src={MacLights} alt="" />
      <div className="List-block">
        <h2>{title}</h2>
        <div className="List-content" id={`list-content-${title}`}>
          {children}
        </div>
        <button onClick={() => exportToPdf(`list-content-${title}`)}>Exportar CheckList</button>
      </div>
    </div>
  );
};

export default List;
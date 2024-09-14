import React from "react";
import "./Document.css";

const Document = ({ image, name, creationTime, viewMode }) => {
  return (
    <div className={`document ${viewMode}`}>
      <div className="img-container">
        <img src={image} alt={`${name} document`} />
      </div>
      <div className="document-details">
        <h3 className="document-name">{name}</h3>
        <p className="document-creation-time">{creationTime}</p>
      </div>
    </div>
  );
};

export default Document;

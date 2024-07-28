import React from "react";
import "./Popup.css";
import Button from "../Button/Button";

const Popup = ({ title, description, onClose }) => {
  return (
    <>
      <div
        className="popup-background"
        onClick={onClose}
        aria-label="Close popup"
      ></div>
      <div
        className="popup"
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
      >
        <h2 className="popup--title" id="popup-title">
          {title}
        </h2>
        <p className="popup--description" id="popup-description">
          {description}
        </p>
        <div className="popup--button">
          <Button onClick={onClose} title="Close" aria-label="Close button" />
        </div>
      </div>
    </>
  );
};

export default Popup;

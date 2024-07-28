import React from "react";
import "./Button.css";

const Button = ({ title, onClick, type }) => {
  const handleClick = (e) => {
    console.log(type);
    if (type !== "submit") {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} role="button" className="button" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;

import React from "react";

const ButtonWithIcon = ({ text, iconName, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex justify-center flex-row text-white bg-button-color p-2 rounded-lg items-center"
    >
      <div>
        <h2 className="ms-8 mr-2">{text}</h2>
      </div>

      <div>
        <i className={iconName}></i>
      </div>
    </button>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="justify-center text-white bg-button-color p-2 rounded-lg items-center my-2"
    >
      <h2>{text}</h2>
    </button>
  );
};

export { ButtonWithIcon, Button };

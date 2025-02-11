import React from "react";

const Sections = ({ text, image, title, index, onClick }) => {
  return (
    <div
      key={index}
      className="w-full flex-col justify-around my-3 text-center"
      onClick={onClick}
    >
      <div className="text-center w-full">
        <h1 className="text-5xl font-poppins text-blue-color">{title}</h1>
      </div>
      <div className="flex mt-5">
        <div className="flex text-center justify-center items-center">
          <p>{text}</p>
        </div>
        <div className="flex pr-8">
          <img src={image} className="w-86" />
        </div>
      </div>
    </div>
  );
};

export { Sections };

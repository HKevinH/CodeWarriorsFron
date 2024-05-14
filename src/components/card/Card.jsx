import React from "react";

const Card = ({ title, children, icon, color }) => {
  return (
    <div
      className="w-full flex flex-col text-center h-auto bottom-5 px-4 py-6 items-center hover:shadow-lg hover:scale-105"
      style={{ backgroundColor: color }}
    >
      <div className="items-center flex justify-center">
        <img className="w-40" src={icon} />
      </div>

      <h1 className="font-semibold text-xl text-black">{title}</h1>
      {children}
    </div>
  );
};

export { Card };

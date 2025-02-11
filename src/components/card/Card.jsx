import React from "react";

const Card = ({ title, children, icon, color, style }) => {
  return (
    <div
      className={
        style
          ? style
          : "w-full flex flex-col text-center h-auto bottom-5 px-4 py-6 items-center hover:shadow-lg hover:scale-105"
      }
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

const CardShadow = ({ children, className }) => {
  return (
    <div
      className={
        className
          ? className
          : "w-full flex flex-col text-center h-auto bottom-5 px-4 py-6 items-center hover:shadow-lg"
      }
    >
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className=" bg-gray-100 mb-5 rounded-2xl">{children}</div>;
};

const CardHeight = ({ children }) => {
  return <div className="h-full">{children}</div>;
};

export { Card, CardShadow, CardContent };

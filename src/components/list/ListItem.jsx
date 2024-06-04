import React from "react";

const ListItemWithIcon = ({ icon, title, key, click }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer h-full"
      key={key}
      onClick={click}
    >
      {icon && <img src={icon} alt={title} className="w-5 h-5 mr-4" />}
      <div>
        <h1 className="font-semibold text-lg text-blue-color">{title}</h1>
      </div>
    </div>
  );
};

export { ListItemWithIcon };

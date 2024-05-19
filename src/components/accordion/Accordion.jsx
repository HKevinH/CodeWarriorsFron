import React, { useState } from "react";
import classNames from "classnames";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames("border-b border-gray-200", {
        "h-auto": isOpen,
      })}
    >
      <button
        className="w-full text-left p-4 focus:outline-none hover:bg-gray-100 transition-colors duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-xl">{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      <div
        className={classNames(
          "p-4 text-gray-700 transition-opacity duration-1000 ease-in-out",
          {
            "opacity-100 max-h-screen": isOpen,
            "opacity-0 max-h-0 overflow-hidden": !isOpen,
          }
        )}
        style={{ transitionProperty: "opacity, max-height" }}
      >
        {content}
      </div>
    </div>
  );
};

export { Accordion };

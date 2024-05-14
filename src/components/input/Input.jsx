import React from "react";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-sm p-2 my-2"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export { Input };

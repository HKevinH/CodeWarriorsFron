import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-5 rounded-lg shadow-lg max-w-sm w-full bg-blue-color">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <span>&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

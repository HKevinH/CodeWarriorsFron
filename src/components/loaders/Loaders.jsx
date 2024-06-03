import { React } from "react";

const Loaders = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen absolute">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-color"></div>
      <div className="animate-pulse md:text-xl my-5"> Espera un momento..</div>
    </div>
  );
};

export { Loaders };

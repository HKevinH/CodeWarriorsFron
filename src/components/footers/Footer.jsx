import { React } from "react";
import LOGO_USC from "../../assets/img/LogoFooter.png";
const Footer = ({ title, text }) => {
  return (
    <footer className="box-border">
      <div className="w-full items-center flex-col justify-center text-center flex bg-blue-dark h-auto pt-5">
        <img src={LOGO_USC} alt="Logo" className="mb-4" />

        <h1 className="text-2xl font-poppins text-white">{title}</h1>
        <div className="w-1/2 pb-5 pt-5">
          <p className="text-white font-poppins">{text}</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

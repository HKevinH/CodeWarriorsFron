import React from "react";

const HeaderBar = () => {
  return (
    <header className="shadow-sm p-2">
      <nav
        id="navbar"
        className="flex w-full flex-row items-center justify-between"
      >
        <ul id="navbarTitle">
          <img
            src="https://raw.githubusercontent.com/HKevinH/PrototypesHtmls/master/assets/logousc.png"
            alt="Logo"
            className="h-10"
          />
        </ul>
        <div className="flex flex-row gap-5">
          <button className="p-5">Inicio</button>
          <button className="p-5">Acerca de</button>
          <button className="p-5">Iniciar Sesion</button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;

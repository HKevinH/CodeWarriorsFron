import React from "react";
import Modal from "../../components/modals/Modals";
import { Button, ButtonWithIcon } from "../../components/buttons/Buttons";
import { Input } from "../../components/input/Input";
import useAuth from "../../hooks/useAuth";

const Register = ({ open, setOpen }) => {
  const { registerAuthGithub } = useAuth();
  const renderItems = () => (
    <div className="w-full flex flex-col text-center">
      <div
        className="text-white text-right hover:cursor-pointer hover:text-gray-500"
        onClick={() => setOpen(!open)}
      >
        X
      </div>
      <div className="items-center flex justify-center">
        <img
          className="w-40"
          src="https://raw.githubusercontent.com/HKevinH/PrototypesHtmls/master/assets/logo.png"
        />
      </div>

      <h1 className="font-semibold text-xl text-white">
        Formulario de Registro
      </h1>
      <form className="w-full p-5 flex flex-col text-left">
        <label className="text-white" htmlFor="username">
          Nombre Completo
        </label>

        <Input placeholder={"Introduce tu nombre completo"} />
        <label htmlFor="email" className="text-white">
          Email
        </label>

        <Input placeholder={"Introduce tu correo"} type={"email"} />

        <label htmlFor="password" className="text-white">
          Contraseña
        </label>
        <Input placeholder={"Contraseña"} />

        <Button type={"button"} text={"Registrarse"} />
      </form>
      <div className="w-full flex flex-col gap-2">
        <ButtonWithIcon
          text={"Registrarse Con Github"}
          onClick={() => registerAuthGithub()}
          iconName={"fab fa-github"}
        />
        <ButtonWithIcon
          text={"Registrarse Con Google"}
          iconName={"fa-brands fa-google"}
        />
      </div>
    </div>
  );

  return <Modal isOpen={open}>{renderItems()}</Modal>;
};

export default Register;

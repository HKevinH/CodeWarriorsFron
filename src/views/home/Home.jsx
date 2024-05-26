import { React, useState } from "react";
import HeaderBar from "../../components/headers/Header";
import { Card } from "../../components/card/Card";
import { Button } from "../../components/buttons/Buttons";
import LOGO_FAQ from "../../assets/img/FAQ.png";
import LOGO_YOUTUBE from "../../assets/img/YoutubeTutorials.png";
import LOGO_REGISTER from "../../assets/img/AddUserMale.png";
import LOGO_ABOUT from "../../assets/img/InfoSquared.png";
import LOGO_HERO from "../../assets/img/1.jpg";
import BG_SECTION from "../../assets/img/Rectangle6.png";
import { Sections } from "../../components/sections/Sections";
import { Footer } from "../../components/footers/Footer";
import { useNavigate } from "react-router-dom";
import Register from "../register/Register";
import Login from "../login/Login";

const Home = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      title: "Inicio",
      click: () => {
        navigate("/");
      },
    },
    {
      title: "Iniciar Sesion",
      click: () => {
        setOpenModalLogin(!openModalLogin);
      },
    },
  ];

  const SectionsContent = [
    {
      title: "USC-CodeWarriors",
      text: "La Universidad Santiago de Cali lanza USC-CodeWarriors, una iniciativa para fortalecer la lógica y eficiencia de programación de los estudiantes mediante retos prácticos y aprendizaje colaborativo.",
      image: BG_SECTION,
    },
    {
      title: "Que es USC - Code Warriors?",
      text: "USC- CodeWarriors es una plataforma concebida para ser usada en la practica de la programacion competitva dentro del campus de la Universidad Santiago de Cali, esto conel fin de mejorar las habilidades de programacion de nuestros estudiantes y su eficiencia en entornos de competiticon ya sea a nivel universidad o en competencias a nivel nacional.",
    },
  ];
  return (
    <div className="">
      <HeaderBar items={items} />
      <main className="overflow-hidden">
        <header className="w-full gap-0 flex grid-cols-2">
          <img
            src={LOGO_HERO}
            className="w-1/2 h-[50%] hover:scale-105 transition-all duration-300 ease-out"
            alt="Hero Image"
          />
          <img
            src={LOGO_HERO}
            className="w-1/2 h-1/2 transition-transform duration-300 ease-out scale-x-[-1] hover:scale-x-[-1] hover:scale-105"
            alt="Hero Image"
          />
        </header>
        <div className="w-full lg:flex lg:flex-row gap-0 items-center sm:grid-cols-2 sm:grid-rows-2 sm:grid">
          <Card title={""} color={"#61CE70"}>
            <img src={LOGO_FAQ} className="h-auto w-15" />
            <Button
              text={"Preguntas Frecuentes"}
              onClick={() => navigate("/help")}
              style={
                "w-full bg-transparent rounded-lg border-2 border-white text-white my-10 hover:bg-white hover:text-black px-4 py-2"
              }
            />
          </Card>

          <Card title={""} color={"#7BDCB5"}>
            <img src={LOGO_YOUTUBE} className="h-auto w-15" />

            <Button
              onClick={() => navigate("/tutorials")}
              text={"Tutoriales"}
              style={
                "w-full bg-transparent rounded-lg border-2 border-white text-white my-10 hover:bg-white hover:text-black px-4 py-2"
              }
            />
          </Card>
          <Card title={""} color={"#8ED1FC"}>
            <img src={LOGO_REGISTER} className="h-auto w-15" />

            <Button
              onClick={() => setOpenModalRegister(!openModalRegister)}
              text={"Registrarse"}
              style={
                "w-full bg-transparent rounded-lg border-2 border-white text-white my-10 hover:bg-white hover:text-black px-4 py-2"
              }
            />
          </Card>
          <Card title={""} color={"#0693E3"}>
            <img src={LOGO_ABOUT} className="h-auto w-15" />

            <Button
              text={"Acerca de"}
              onClick={() => navigate("/about")}
              style={
                "w-full bg-transparent rounded-lg border-2 border-white text-white my-10 hover:bg-white hover:text-black px-4 py-2"
              }
            />
          </Card>
        </div>

        <div className="p-10 bottom-10 flex-col gap-5">
          {SectionsContent.map((section, index) => (
            <Sections
              key={index}
              onClick={section.onClick}
              title={section.title}
              text={section.text}
              image={section.image}
            />
          ))}
        </div>
        <Footer
          title="Programacion Competitiva"
          text={
            "Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional."
          }
        />
      </main>

      {openModalRegister && (
        <Register setOpen={setOpenModalRegister} open={openModalRegister} />
      )}
      {openModalLogin && (
        <Login setOpen={setOpenModalLogin} open={openModalLogin} />
      )}
    </div>
  );
};

export default Home;

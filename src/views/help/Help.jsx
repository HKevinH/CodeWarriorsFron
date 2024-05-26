import { React, useState } from "react";
import HeaderBar from "../../components/headers/Header";
import { Footer } from "../../components/footers/Footer";
import { CardShadow } from "../../components/card/Card";
import IMAGE_FAQ from "../../assets/img/FaqBG.png";

import { Accordion } from "../../components/accordion/Accordion";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();
  //#region

  const handleFilter = (e) => {
    const value = e.target.value;
    const filter = itemsAbouts.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    setFilterItems(filter);
  };
  const itemsHeader = [
    {
      title: "Inicio",
      click: () => {
        navigate("/");
      },
    },

    {
      title: "Ayuda",
      click: () => {
        navigate("/help");
      },
    },
  ];

  const itemsAbouts = [
    {
      title: "Que es la programacion competitiva?",
      content:
        "La programación competitiva es una modalidad de competencia en la que los participantes intentan resolver problemas de programación en un tiempo limitado. En general, los problemas son matemáticos o algorítmicos y deben ser resueltos en un lenguaje de programación.",
    },
    {
      title: "Como puedo mejorar en programacion competitiva?",
      content:
        "Para mejorar en programación competitiva, es importante practicar regularmente y participar en competencias. También es útil estudiar algoritmos y estructuras de datos, y trabajar en proyectos de programación.",
    },
    {
      title: "Que es USC - Code Warriors?",
      content:
        "USC- CodeWarriors es una plataforma concebida para ser usada en la practica de la programacion competitva dentro del campus de la Universidad Santiago de Cali, esto conel fin de mejorar las habilidades de programacion de nuestros estudiantes y su eficiencia en entornos de competiticon ya sea a nivel universidad o en competencias a nivel nacional.",
    },
    {
      title: "Como puedo registrarme en USC - Code Warriors?",
      content:
        "Para registrarte en USC - Code Warriors, debes ser estudiante de la Universidad Santiago de Cali y tener una cuenta de correo institucional. Luego, puedes acceder a la plataforma con tus credenciales de estudiante y comenzar a participar en los retos de programación.",
    },
  ];

  const [filterItems, setFilterItems] = useState(itemsAbouts);

  //#endregion
  return (
    <div className="">
      <HeaderBar items={itemsHeader} />

      <div className="w-full">
        <CardShadow>
          <div className=" w-full flex p-4">
            <div className="w-2/4 items-center justify-center">
              <img src={IMAGE_FAQ} className="w-3/4" />
            </div>
            <div className="w-2/4">
              <CardShadow
                className={
                  "w-full flex flex-col h-full shadow-2xl rounded-xl p-8 relative"
                }
              >
                <input
                  className="rounded-lg w-1/2 h-10 shadow-xl border-gray-300 p-4 absolute top-5 right-5 mb-3"
                  placeholder="Busca una pregunta..."
                  onChange={handleFilter}
                />
                <h1 className="text-3xl font-bold text-blue-color py-10">
                  FAQ
                </h1>
                <div>
                  {filterItems.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        title={item.title}
                        content={item.content}
                      />
                    );
                  })}
                </div>
              </CardShadow>
            </div>
          </div>
        </CardShadow>
      </div>
      <Footer
        title="Programacion Competitiva"
        text={
          "Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional."
        }
      />
    </div>
  );
};

export default Help;

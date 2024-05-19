import { React } from "react";
import HeaderBar from "../../components/headers/Header";
import { Footer } from "../../components/footers/Footer";
import IMAGE_V from "../../assets/img/V.png";
import IMAGE_M from "../../assets/img/M.png";
import { useNavigate } from "react-router-dom";
import { Sections } from "../../components/sections/Sections";
const About = () => {
  const navigate = useNavigate();
  //#region

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

  const sections = [
    {
      title: "Mision",
      image: IMAGE_M,
      text: "Fomentar la excelencia y la innovación en el campo de la informática a través de la competencia y colaboración, proporcionando a los estudiantes de la Universidad una plataforma dinámica que desafíe sus habilidades de programación, fomente el trabajo en equipo y desarrolle soluciones creativas a problemas complejos, preparándolos para ser líderes en la industria tecnológica.",
    },
    {
      image: IMAGE_V,
      title: "Vision",
      text: "Ser reconocida dentro de la comunidad académica como la plataforma líder en programación competitiva que capacita a los estudiantes para la excelencia técnica, nutriendo talentos que están preparados para contribuir y prosperar en un entorno tecnológico en constante evolución, y que actúa como un trampolín para innovadores y pensadores críticos que aspiran a transformar la industria tecnológica.",
    },
  ];
  //#endregion
  return (
    <div className="">
      <HeaderBar items={itemsHeader} />

      <div className="w-full p-20">
        {sections.map((section, index) => (
          <Sections
            key={index}
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
    </div>
  );
};

export default About;

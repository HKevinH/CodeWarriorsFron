import HeaderBar from "../../components/headers/Header";
import { useLocation, useNavigate } from "react-router-dom";
import IMAGE_TUTORIALS from "../../assets/img/CardTutorials.png";
import BG_TUTORIALS from "../../assets/img/TutorialsBg.png";
import classNames from "classnames";
import { Footer } from "../../components/footers/Footer";
const Tutorials = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  const Items = [
    {
      title: "Preguntas Frecuentes",
      click: () => {
        navigate("/help");
      },
    },
    {
      title: "Inicio",
      click: () => {
        navigate("/");
      },
    },
    {
      title: `${data ? "Cerrar Sesión" : "Iniciar Sesión"}`,
      click: () => {
        navigate("/");
      },
    },
  ];

  const LisItemTutorials = [
    {
      title: "Manejo de Strings",
    },
    {
      title: "Manejo de Arrays",
    },
    {
      title: "Manejo de Objetos",
    },
    {
      title: "Manejo de Funciones",
    },
    {
      title: "Manejo de Clases",
    },
    {
      title: "Manejo de Promesas",
    },
    {
      title: "Manejo de Fetch",
    },
    {
      title: "Manejo de Async/Await",
    },
  ];

  return (
    <>
      <header>
        <HeaderBar items={Items} />
      </header>
      <main className="ml-40  mr-40">
        <div className="flex w-full">
          <img
            src={IMAGE_TUTORIALS}
            alt="Busca lo que quieras!"
            className={classNames(
              "transform transition duration-300 ease-in-out w-full"
            )}
          />
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          {LisItemTutorials.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col text-center h-auto bottom-5 items-center py-5 hover:opacity-50 hover:cursor-pointer"
            >
              <img className="w-full" src={BG_TUTORIALS} />
              <h1 className="font-light text-xl text-black">{item.title}</h1>
            </div>
          ))}
        </div>
      </main>
      <Footer
        title="Programacion Competitiva"
        text={
          "Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.Personería jurídica otorgada por el Ministerio de Justicia mediante la Resolución No. 2.800 del 02 de septiembre de 1959.Reconocida como Universidad por el Decreto No. 1297 de 1964 emanado del Ministerio de Educación Nacional."
        }
      />
    </>
  );
};

export default Tutorials;

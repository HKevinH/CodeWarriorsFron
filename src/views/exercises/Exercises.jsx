import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../components/headers/Header";
import useCompetitiveProblems from "../../hooks/useCompetitiveProblems";
import { Footer } from "../../components/footers/Footer";
import { useAuthStore } from "../../store/authStore";
const Exercises = () => {
  const navigate = useNavigate();
  const { problems } = useCompetitiveProblems();
  const user = useAuthStore((state) => state.user);

  const Items = [
    {
      title: "Inicio",
      click: () => {
        navigate("/");
      },
    },
    {
      title: "Preguntas Frecuentes",
      click: () => {
        navigate("/help");
      },
    },
    {
      title: user ? "Perfil" : "Iniciar Sesión",
      click: () => {
        navigate("/");
      },
    },
  ];
  return (
    <>
      <header>
        <HeaderBar items={Items} />
      </header>
      <main className="ml-20 mr-20 mb-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem) => (
            <div
              onClick={() => navigate(`/problem/${problem.id}`)}
              key={problem.id}
              className="bg-white shadow-md rounded-md p-4 hover:scale-105"
            >
              <h1 className="text-xl font-bold">{problem.title}</h1>
              <p className="text-gray-500">{problem.description}</p>
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

export default Exercises;

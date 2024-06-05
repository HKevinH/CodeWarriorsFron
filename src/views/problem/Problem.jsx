import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProblem, uploadFile } from "../../api/handlersCompetitive";
import HeaderBar from "../../components/headers/Header";
import { useAuthStore } from "../../store/authStore";

const Problem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [problems, setProblems] = React.useState([]);
  const user = useAuthStore((state) => state.user);

  React.useEffect(() => {
    const fetchProblem = async () => {
      const response = await getProblem(id);
      console.log(response);
      setProblems(response);
    };
    fetchProblem();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
        if (user) {
          navigate("/dashboard", { state: { data: user } });
        } else {
          navigate("/");
        }
      },
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      try {
        const response = await uploadFile(selectedFile, {
          user_id: user.id,
          id: id,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <header>
        <HeaderBar items={Items} />
      </header>
      <main className="ml-20 mr-20 mt-10">
        <div className="items-center flex-col justify-center bg-gray-100 w-full rounded-xl shadow-xl p-5">
          <div>
            <h1 className="font-bold text-blue-color text-center text-2xl">
              {problems.title}
            </h1>

            <p className="text-center">{problems.description}</p>
          </div>
          <div className="flex w-full justify-center h-[30%] items-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-color text-white rounded-lg w-40 pt-3 pb-3 m-2"
            >
              Enviar
            </button>
            <input
              onChange={handleFileChange}
              type="file"
              className="w-1/2 p-2 border-2 border-gray-300 rounded-lg my-5 flex items-center justify-center"
              accept=".cpp,.c,.java,.py"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Problem;

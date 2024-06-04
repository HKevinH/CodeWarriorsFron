import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getUserComplete, updateProfile } from "../../api/handlersUsers";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/img/logousc.png";
import * as Yup from "yup";
import { Loaders } from "../../components/loaders/Loaders";
import { data } from "autoprefixer";

const CompleteRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserComplete();
      setDataUser(response);
    };
    fetchData();
  }, []);

  const validationSchema = Yup.object({
    lastname: Yup.string().required("Nombre Completo es requerido"),
    email: Yup.string()
      .email("Correo Electrónico no es válido")
      .required("Correo Electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Contraseña es requerida"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    const newData = { ...dataUser, ...values };
    try {
      setIsLoad(true);
      const res = await updateProfile(newData);
      setSubmitting(true);
      if (res == "OK") {
        setIsLoad(!isLoad);
        navigate("/dashboard", { state: { data: newData } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100">
      {!isLoad ? (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <img src={LOGO} alt="Logo" className="h-16 hover:scale-105" />
          </div>
          <h1 className="text-center text-2xl mb-4 text-blue-700">
            Completa tu registro
          </h1>
          <Formik
            initialValues={{
              lastname: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex flex-col mb-4">
                  <label htmlFor="lastname" className="mb-2">
                    Nombre Completo:
                  </label>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Nombre Completo"
                    className="border-gray-300 p-2 rounded border"
                    required
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="mb-2">
                    Correo Electrónico:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo Electrónico"
                    className="border-gray-300 p-2 rounded border"
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="password" className="mb-2">
                    Contraseña:
                  </label>
                  <div className="relative w-full">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                      className="border-gray-300 p-2 rounded border w-full"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`fa ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                    disabled={isSubmitting}
                  >
                    Completar Registro
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <Loaders />
      )}
    </div>
  );
};

export default CompleteRegister;

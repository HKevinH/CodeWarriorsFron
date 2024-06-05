import Modal from "../../components/modals/Modals";
import { Button, ButtonWithIcon } from "../../components/buttons/Buttons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { useAuthStore } from "../../store/authStore";
// eslint-disable-next-line react/prop-types
const Register = ({ open, setOpen }) => {
  const user = useAuthStore((state) => state.user);
  console.log(user);
  const {
    registerAuthGithub,
    registerAuthGoogle,
    registerWithEmailAndPassword,
  } = useAuth();

  const validationSchema = Yup.object({
    lastname: Yup.string().required("Nombre Completo es requerido"),
    username: Yup.string().required("Nombre de Usuario es requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string()
      .min(6, "Debe tener al menos 6 caracteres")
      .required("Requerido"),
  });

  return (
    <Modal isOpen={open}>
      {user == null ? (
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
              alt="Logo"
            />
          </div>

          <h1 className="font-semibold text-xl text-white">
            Formulario de Registro
          </h1>
          <Formik
            initialValues={{
              lastname: "",
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await registerWithEmailAndPassword(values);
                setOpen(false);
              } catch (error) {
                console.error("Error registering:", error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full p-5 flex flex-col text-left">
                <label htmlFor="lastname" className="text-white">
                  Nombre Completo
                </label>
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Introduce tu nombre completo"
                  className="border p-2 rounded"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500"
                />
                <label htmlFor="username" className="text-white">
                  Nombre de Usuario
                </label>
                <Field
                  name="username"
                  type="text"
                  placeholder="Introduce tu nombre de usuario"
                  className="border p-2 rounded"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />

                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Introduce tu correo"
                  className="border p-2 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />

                <label htmlFor="password" className="text-white">
                  Contraseña
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  className="border p-2 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />

                <Button
                  type="submit"
                  text="Registrarse"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
          <div className="w-full flex flex-col gap-2">
            <ButtonWithIcon
              text="Registrarse Con Github"
              onClick={registerAuthGithub}
              iconName="fab fa-github"
            />
            <ButtonWithIcon
              text="Registrarse Con Google"
              onClick={registerAuthGoogle}
              iconName="fa-brands fa-google"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <h1 className="font-semibold text-xl text-white">
            ¡Bienvenido a la Comunidad!
          </h1>
          <h1 className="font-semibold  text-xl text-white">
            Para registrarte, Cierra sesion
          </h1>
          <Button text="Cerrar Sesion" onClick={() => setOpen(!open)} />
        </div>
      )}
    </Modal>
  );
};

export default Register;

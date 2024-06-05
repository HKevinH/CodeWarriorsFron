import Modal from "../../components/modals/Modals";
import { Button, ButtonWithIcon } from "../../components/buttons/Buttons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
// eslint-disable-next-line react/prop-types
const Login = ({ open, setOpen }) => {
  const { loginWithEmailAndPassword } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string()
      .min(6, "Debe tener al menos 6 caracteres")
      .required("Requerido"),
  });

  return (
    <Modal isOpen={open}>
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
          Formulario de Inicio de Sesión
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await loginWithEmailAndPassword({
                username: values.email,
                password: values.password,
              });
              setOpen(false);
            } catch (error) {
              console.error("Error logging in:", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full p-5 flex flex-col text-left">
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
                text="Iniciar Sesión"
                type={"submit"}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
        <div className="w-full flex flex-col gap-2">
          <ButtonWithIcon
            text={"Iniciar Sesion Con Github"}
            iconName={"fab fa-github"}
          />
          <ButtonWithIcon
            text={"Iniciar Sesion Con Google"}
            iconName={"fa-brands fa-google"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Login;

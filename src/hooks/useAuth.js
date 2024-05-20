import { getAuthUrl } from "../api/handlers";

const useAuth = () => {
  const registerAuthGithub = async () => {
    const url = await getAuthUrl("github");
    try {
      const popupWindow = window.open(
        `${url}`,
        "oauthPopup",
        "width=600,height=600"
      );

      return popupWindow;
    } catch (error) {
      console.log(error, "error");
    }
  };

  const registerWithEmailAndPassword = () => {
    console.log("Registrarse con Email y Contraseña");
  };

  const registerAuthGoogle = () => {
    console.log("Registrarse con Google");
  };
  return {
    registerAuthGoogle,
    registerAuthGithub,
    registerWithEmailAndPassword,
  };
};

export default useAuth;

const useAuth = () => {
  const registerAuthGithub = async () => {
    const url = `http://localhost:8080/oauth2/authorization/github`;
    window.location.href = url;
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

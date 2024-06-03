const useAuth = () => {
  const url = (provider) =>
    (window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`);

  const registerAuthGithub = async () => {
    url("github");
  };

  const registerWithEmailAndPassword = () => {
    console.log("Registrarse con Email y Contraseña");
  };

  const registerAuthGoogle = async () => {
    url("google");
  };
  return {
    registerAuthGoogle,
    registerAuthGithub,
    registerWithEmailAndPassword,
  };
};

export default useAuth;

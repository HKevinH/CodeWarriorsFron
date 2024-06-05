import { loginUsers, registerUsers } from "../api/handlersUsers";
import { useAuthStore } from "../store/authStore";
const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const url = (provider) =>
    (window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`);

  const registerAuthGithub = async () => {
    url("github");
  };

  const registerWithEmailAndPassword = async (data) => {
    try {
      const res = await registerUsers(data);
      setUser(res);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const registerAuthGoogle = async () => {
    url("google");
  };

  const loginWithEmailAndPassword = async (data) => {
    try {
      const res = await loginUsers(data);
      setUser(res);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    registerAuthGoogle,
    loginWithEmailAndPassword,
    registerAuthGithub,
    registerWithEmailAndPassword,
  };
};

export default useAuth;

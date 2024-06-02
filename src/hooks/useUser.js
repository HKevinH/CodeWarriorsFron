import { useState } from "react";
import { getUserComplete } from "../api/handlersUsers";

const useUser = () => {
  const [userData, setUserData] = useState(null);

  const getUserDataRegister = async () => {
    const response = await getUserComplete();
    setUserData(response);
    return response;
  };

  return { getUserDataRegister, userData };
};

export default useUser;

import { get, post } from "./handlers";

const getUsers = async () => await get("/getAllUsers");

const getUserComplete = async () =>
  await get("/user/oauth", { withCredentials: true });

const updateProfile = async (data) => await post("/user/update", data);

export { updateProfile, getUsers, getUserComplete };

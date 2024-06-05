import { get, post } from "./handlers";

const getUsers = async () => await get("/getAllUsers");

const getUserComplete = async () =>
  await get("/user/oauth", { withCredentials: true });

const updateProfile = async (data) =>
  await post("/user/update", data, { withCredentials: true });

const loginUsers = async (data) =>
  await post("/login", data, { withCredentials: true });

const registerUsers = async (data) =>
  await post("/register", data, { withCredentials: true });

export { registerUsers, loginUsers, updateProfile, getUsers, getUserComplete };

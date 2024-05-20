import { get, post } from "./handlers";

const getUsers = async () => await get("/getAllUsers");

const registerWithGoogle = async (data) =>
  await post("/oauth2/authorization/google", data);

const registerWithGithub = async () =>
  await get("/oauth2/authorization/github");

export { getUsers, registerWithGoogle, registerWithGithub };

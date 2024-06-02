import { get } from "./handlers";

const getUsers = async () => await get("/getAllUsers");

const getUserComplete = async () => await get("/complete-registration");

export { getUsers, getUserComplete };

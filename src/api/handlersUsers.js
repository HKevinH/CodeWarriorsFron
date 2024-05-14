import { get } from "./handlers";

const getUsers = async () => await get("/getAllUsers");

export { getUsers };

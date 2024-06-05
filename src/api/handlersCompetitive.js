import axios from "axios";
import { get } from "./handlers";

const getAllProblems = () => get("/competitive-problems/getAll");

const getProblem = (id) => get(`/competitive-problems/${id}`);

const uploadFile = (file, data) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(
    `/competitive-problems/add/file/${data.id}/user/${data.user_id}`,
    formData,
    {
      baseURL: "http://localhost:8080",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export { getProblem, getAllProblems, uploadFile };

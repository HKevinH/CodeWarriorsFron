import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Cross-Origin": "*",
    "Acess-Control-Allow-Methods": "*",
  },
});

const get = async (url) => {
  const response = await instance.get(url);
  return response.data;
};

const post = async (url, data) => {
  const response = await instance.post(url, data);
  return response.data;
};

const put = async (url, data) => {
  const response = await instance.put(url, data);
  return response.data;
};

const remove = async (url) => {
  const response = await instance.delete(url);
  return response.data;
};

export { get, post, put, remove };

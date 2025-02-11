import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Cross-Origin": "*",
  },
});

const get = async (url, data) => {
  const response = await instance.get(url, data);
  return response.data;
};

const post = async (url, data, options = {}) => {
  const response = await instance.post(url, data, options);
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

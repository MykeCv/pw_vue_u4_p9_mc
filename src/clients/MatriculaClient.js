import axios from "axios";

const TOKEN = localStorage.getItem("token");
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";

const axiosInstance = axios.create({baseURL: URL,headers: {Authorization: `Bearer ${TOKEN}`,"Content-Type": "application/json"}});

export const consultarTodosFachada = async () => {
  const { data } = await axiosInstance.get("/");
  return data;
};

export const consultarPorIdFachada = async (id) => {
  const { data } = await axiosInstance.get(`/${id}`);
  return data;
};

export const guardarFachada = async (body) => {
  const { data } = await axiosInstance.post("/", body);
  return data;
};

export const actualizarFachada = async (id, body) => {
  const { data } = await axiosInstance.put(`/${id}`, body);
  return data;
};

export const actualizarParcialFachada = async (id, body) => {
  const { data } = await axiosInstance.patch(`/${id}`, body);
  return data;
};

export const borrarFachada = async (id) => {
  const { data } = await axiosInstance.delete(`/${id}`);
  return data;
};

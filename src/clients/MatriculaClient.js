import axios from "axios";

const consultarTodos = async () => {

    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}

const consultarPorID = async (id) => {

    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
    return data;
}

const guardar = async (body) => {

    /*const objeto = {
        nombre: 'Michael',
        apellido: 'Cevallos'
    }*/

    const data = axios.post(`http://localhost:8081/matricula/api/v1.0/estudiantes`, body).then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const data = axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, body) => {
    const data = axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    console.log(data);
    return data;
}

const borrar = async (id) => {

    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
}

// 1️⃣ Crear instancia
const api = axios.create({
  baseURL: "http://localhost:8081/matricula/api/v1.0",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
/*
export const consultarTodosFachada = async () => {
    return await consultarTodos();
}

export const consultarPorIDFachada = async (id) => {
    return await consultarPorID(id);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    await borrar(id);
}*/
export const consultarTodosFachada = async () => {
  return await api.get("/estudiantes").then(r => r.data);
};

export const consultarPorIDFachada = async (id) => {
  return await api.get(`/estudiantes/${id}`).then(r => r.data);
};

export const guardarFachada = async (body) => {
  return await api.post("/estudiantes", body).then(r => r.data);
};

export const actualizarFachada = async (id, body) => {
  return await api.put(`/estudiantes/${id}`, body).then(r => r.data);
};

export const actualizarParcialFachada = async (id, body) => {
  return await api.patch(`/estudiantes/${id}`, body).then(r => r.data);
};

export const borrarFachada = async (id) => {
  await api.delete(`/estudiantes/${id}`);
};

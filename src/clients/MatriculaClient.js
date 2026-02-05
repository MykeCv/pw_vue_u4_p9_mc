import axios from "axios";

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDI1MjAyNiwiZXhwIjoxNzcwMjU1NjI2LCJqdGkiOiJkMGYxZjJjNS0xMDQxLTQ0MWEtODI5Yi0wMjUxNWUyZmU0MWEifQ.SeXpSVc5hPAs35etjnh7jyuS9xr1FHFLtGTT41VK-WuBEHUdptYQq0h3dqB1TLX0_PtvUHm8y0yMPlRwRGuTK_LRq5FypaR5qhwayqE0EEeOQ2Mv3GEV72HdyO3L2-O5sZWWQQfL40nWrPDPxKGHS1JKFbPWUjVIa0s9DcOt3nHb1Hfe4kao2WNyQ8S36JEhM7oTtriaHdt8LpajSxyOfQtm92CXaGLlWpuDrcuJC9wmZrAid43opRrEoxjvxWm1ASHRC0xi4ip3uyubik59qTcqD79seoX6eBw5jf9rw7igIXxNfbecmozMyO89m-HcQuKEBN6UakgD2K2L9gD5mw";
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json"
  }
});

// CRUD
export const facadeConsultarTodos = async () => {
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

// import axios from "axios";



// const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDI1MjAyNiwiZXhwIjoxNzcwMjU1NjI2LCJqdGkiOiJkMGYxZjJjNS0xMDQxLTQ0MWEtODI5Yi0wMjUxNWUyZmU0MWEifQ.SeXpSVc5hPAs35etjnh7jyuS9xr1FHFLtGTT41VK-WuBEHUdptYQq0h3dqB1TLX0_PtvUHm8y0yMPlRwRGuTK_LRq5FypaR5qhwayqE0EEeOQ2Mv3GEV72HdyO3L2-O5sZWWQQfL40nWrPDPxKGHS1JKFbPWUjVIa0s9DcOt3nHb1Hfe4kao2WNyQ8S36JEhM7oTtriaHdt8LpajSxyOfQtm92CXaGLlWpuDrcuJC9wmZrAid43opRrEoxjvxWm1ASHRC0xi4ip3uyubik59qTcqD79seoX6eBw5jf9rw7igIXxNfbecmozMyO89m-HcQuKEBN6UakgD2K2L9gD5mw"; 
// const URL="http://localhost:8081/matricula/api/v1.0/estudiantes";

// const consultarTodos = async() => {
    
//     const data = await axios.get(`${URL}`).then(r => r.data)
//     return data;
// }
// const consultarPorId = async(id) => {
//     const data = await axios.get(`${URL}/${id}`).then(res => res.data);
//     return data;
// }
 
// const guardar = async(body) => {
//     const data = axios.post(`${URL}`,body,{headers:{Authorization:`Bearer ${token}`}}).then(res=>res.data);
//     console.log(data);
//     return data;
// }
 
// const actualizar = async(id,body) => {
//     const data = axios.put(`${URL}/${id}`,body).then(res=>res.data);
//     console.log(data);
//     return data;
   
// }
 
// const actualizarParcial = async(id,body) => {
//     const data = axios.patch(`${URL}/${id}`,body).then(res=>res.data);
//     console.log(data);
//     return data;
// }
 
// const borrar = async(id) => {
//     axios.delete(`${URL}/${id}`).then(res=>res.data);
// }
 
// export const facadeConsultarTodos = async () => {
//     return await consultarTodos();
// }
 
// export const consultarPorIdFachada = async(id) => {
//     return await consultarPorId(id);
// }
 
// export const guardarFachada = async (body) => {
//     return await guardar(body);
// }
 
// export const actualizarFachada = async(id,body) => {
//     return await actualizar(id,body);
   
// }
 
// export const actualizarParcialFachada = async(id,body) => {
//     await actualizarParcial(id,body);
// }
 
// export const borrarFachada = async (id) => {
//     await borrar(id);
// }
 
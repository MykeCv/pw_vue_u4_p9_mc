import axios from "axios";

// Datos de login
const body = new URLSearchParams();
body.append("username", "andres");
body.append("password", "root");

// Función para obtener token
const obtenerToken = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8082/auth/login",
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    return response.data; // normalmente { token: "..." }
  } catch (error) {
    console.error("Error al obtener token:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Fachada exportada
export const obtenerTokenFachada = async () => {
  return await obtenerToken();
};





/*import axios from "axios";

export const login = async (user, password) => {
  const form = new URLSearchParams();
  form.append("user", user);
  form.append("password", password);

  const data = await axios.post("http://localhost:8082/auth/token", form, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then(r => r.data);

  localStorage.setItem("token", data.accessToken);
  localStorage.setItem("role", data.role);
  return data;
};
*/

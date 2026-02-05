import axios from "axios";

const obtenerToken = async () => {
    const username = "Michael";
    const password = "1234";
    
    try {
        const response = await axios.get(`http://localhost:8082/autorizacion/token?username=${username}&password=${password}`).then(response => {
            return response.data;
        });
        const token = response.accessToken;
        localStorage.setItem("token", token);
    } catch (error) {
        console.error("Error al obtener token:", error);
    }
}


export const obtenerTokenFachada = async() => {
    return await obtenerToken();
}
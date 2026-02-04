import axios from "axios";

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

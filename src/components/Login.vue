<template>
    <div class="login">
        <h2>Login</h2>
        <input v-model="usuario" type="text" placeholder="Usuario">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="login()">Entrar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: "",
            password: "",
        };
    },
    methods: {
        login() {
            /*Mandar a obtener el token */
            const TOKEN = localStorage.getItem("token")
            if (TOKEN !== null) {
                localStorage.setItem("tokn", TOKEN);
                localStorage.setItem("estaAutenticado", true);
            } else {
                console.log("Error de Autenticacion");
            }
        }
    }
};
</script>

<style>
h2{
  text-align: center;
  margin: 22px 0 14px;
  font-size: 22px;
  color: #111827;
}

input{
  display: block;
  margin: 10px auto;
  width: 320px;
  max-width: 90%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
}

input:focus{
  border-color: #2563eb;
}

button{
  display: block;
  margin: 12px auto 24px;
  width: 320px;
  max-width: 90%;
  padding: 10px 14px;
  border: 1px solid #2563eb;
  background: #2563eb;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
}

button:hover{
  filter: brightness(0.95);
}

/*.login {
    width: 300px;
    margin: 100px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 8px;
    text-align: center;
}

input {
    width: 100px;
    margin-bottom: 10px;
    padding: 8px;
}

button {
    width: 100%;
    padding: 5px;
    cursor: pointer;
}*/
</style>
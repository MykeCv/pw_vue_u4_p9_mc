<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/consultartodos">ConsultarTodos</router-link> |
    <router-link to="/consultarPorId">ConsultarPorID</router-link> |
    <router-link to="/guardar">Guardar</router-link> |
    <router-link to="/actualizar">Actualizar</router-link> |
    <router-link to="/actualizarParcial">Actualizar Parcial</router-link> |
    <router-link to="/borrar">Borrar</router-link>
    
  </nav>
  <router-view/>
</template>

<script>
import { obtenerTokenFachada } from '@/clients/AuthClient';
export default {
  async mounted() {
    try {
       await obtenerTokenFachada();
       const test = localStorage.getItem("token");
       console.log(test);
       
      
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  },
}
</script>

<style>
/*nav{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 14px 10px;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
}

nav a{
  color: #111827;
  text-decoration: none;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 8px;
}

nav a:hover{
  background: #f3f4f6;
}

nav a.router-link-exact-active{
  background: #e5f0ff;
  color: #1d4ed8;
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


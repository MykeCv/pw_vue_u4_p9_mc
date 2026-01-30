<template>
  <div>
    <h2>Borrar Estudiante</h2>
    <input v-model="id" type="number" placeholder="ID del estudiante"/>
    <br/><br/>
    <button @click="borrar">Borrar</button>
  </div>
</template>

<script>
import { borrarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      id: "",
    };
  },
  methods: {
    async borrar() {
      await borrarFachada(this.id);

      // limpiar
      this.id = "";
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 8px auto;
  padding: 6px 10px;
  width: 250px;
}
</style>

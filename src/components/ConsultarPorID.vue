<template>
  <div>
    <h2>CONSULTAS POR ID</h2>

    <button @click="consumirID">Consultar por ID</button>
    <input v-model.number="id" type="number" min="1" placeholder="Ingresa el ID" />

    <table v-if="estudiante" border="1" style="margin:auto">
      <tr><th>ID</th><td>{{ estudiante.id }}</td></tr>
      <tr><th>Nombre</th><td>{{ estudiante.nombre }}</td></tr>
      <tr><th>Apellido</th><td>{{ estudiante.apellido }}</td></tr>
      <tr><th>Género</th><td>{{ estudiante.genero }}</td></tr>
      <tr><th>Provincia</th><td>{{ estudiante.provincia }}</td></tr>
      <tr><th>Fecha Nacimiento</th><td>{{ estudiante.fechaNacimiento }}</td></tr>
    </table>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      id: null,
      estudiante: null,
    };
  },
  methods: {
    async consumirID() {
      this.estudiante = null;

      try {
        this.estudiante = await consultarPorIdFachada(this.id);
        console.log("Estudiante:", this.estudiante);
      } catch (_) {
      }
    },
  },
};
</script>

<style>
input {
  margin-right: 10px;
  padding: 6px 10px;
}
th, td {
  padding: 8px 12px;
}
</style>

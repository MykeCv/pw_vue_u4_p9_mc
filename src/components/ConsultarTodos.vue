<template>
  <div>
    <h2>CONSULTAR TODOS LOS ESTUDIANTES</h2>
    <button @click="consumirTodos">Consultar Todos</button>
    <table v-if="estudiantes && estudiantes.length" border="1" style="margin:auto">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Género</th>
        <th>Provincia</th>
        <th>Fecha Nacimiento</th>
      </tr>
      <tr v-for="e in estudiantes" :key="e.id">
        <td>{{ e.id }}</td>
        <td>{{ e.nombre }}</td>
        <td>{{ e.apellido }}</td>
        <td>{{ e.genero }}</td>
        <td>{{ e.provincia }}</td>
        <td>{{ e.fechaNacimiento }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { consultarTodosFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      estudiantes: null,
    };
  },
  methods: {
    async consumirTodos() {
      this.estudiantes = null;
      try {
        this.estudiantes = await consultarTodosFachada();
      } catch (_) {
        this.estudiantes = null;
      }
    },
  },
};
</script>

<style>
button {
  margin-right: 10px;
  padding: 6px 10px;
}
th, td {
  padding: 8px 12px;
}
</style>

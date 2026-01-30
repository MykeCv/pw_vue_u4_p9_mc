<template>
    <div>
        <h2>Consultar Todos los Estudiantes</h2>
        <button @click="consumirTodos">ConsultarTodos</button>
        <table v-if="estudiantes && estudiantes.length" border="1" style="margin:20px auto; border-collapse: collapse;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Género</th>
          <th>Provincia</th>
          <th>Fecha Nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in estudiantes" :key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.nombre }}</td>
          <td>{{ e.apellido }}</td>
          <td>{{ e.genero }}</td>
          <td>{{ e.provincia }}</td>
          <td>{{ e.fechaNacimiento }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import {consultarTodosFachada} from '../clients/MatriculaClient.js'
export default {
    data(){
        return{
            estudiantes: [],
            cargando: false,
            error: null,
        };
    },
    methods: {
          async consumirTodos() {
      this.error = null;
      this.estudiantes = [];

        try {
        this.cargando = true;
        this.estudiantes = await consultarTodosFachada();
        console.log("Lista:", this.estudiantes);
        } catch (e) {
        console.error(e);
        this.error = "Error al consultar los estudiantes";
        } finally {
        this.cargando = false;
             }
        },
    },
}
</script>

<style scoped>
th, td {
  padding: 8px 12px;
}
</style>
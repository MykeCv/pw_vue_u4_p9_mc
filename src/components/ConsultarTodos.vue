<!-- <template>
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
</style> -->

<template>
  <div>
    <h2>Consultar Todos los Estudiantes</h2>

    <button @click="consumirTodos" :disabled="cargando">
      {{ cargando ? "Cargando..." : "Consultar Todos" }}
    </button>

    <p v-if="error" style="color: red;">{{ error }}</p>

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

    <p v-else-if="!cargando">No hay estudiantes para mostrar.</p>
  </div>
</template>

<script>
import { facadeConsultarTodos } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
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
    this.estudiantes = await facadeConsultarTodos();
    console.log("Lista de estudiantes:", this.estudiantes);
  } catch (e) {
    console.error("Error al consultar todos:", e);
    this.error = "Error al consultar los estudiantes";
  } finally {
    this.cargando = false;
  }
}

  },
}
</script>

<style scoped>
th, td {
  padding: 8px 12px;
}
button {
  margin: 10px 0;
  padding: 6px 12px;
}
</style>

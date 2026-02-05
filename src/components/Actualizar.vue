<template>
  <div>
    <h2>Actualizar Estudiante</h2>

    <input v-model="id" type="number" placeholder="ID del estudiante"/>
    <input v-model="estudiante.nombre" placeholder="Nombre" type="text"/>
    <input v-model="estudiante.apellido" placeholder="Apellido" type="text"/>
    <input v-model="estudiante.genero" placeholder="Género" type="text"/>
    <input v-model="estudiante.provincia" placeholder="Provincia" type="text"/>
    <input v-model="estudiante.fechaNacimiento" type="date"/>
    <br/><br/>
    <button @click="actualizar">Actualizar</button>
  </div>
</template>

<script>
import { actualizarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      id: "",
      estudiante: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        provincia: "",
        genero: "",
      },
    };
  },
  methods: {
    async actualizar() {
      const body = {
        nombre: this.estudiante.nombre,
        apellido: this.estudiante.apellido,
        fechaNacimiento: this.estudiante.fechaNacimiento
          ? this.estudiante.fechaNacimiento + "T00:00:00"
          : null,
        provincia: this.estudiante.provincia,
        genero: this.estudiante.genero,
      };

      await actualizarFachada(this.id, body);

      // limpiar
      this.id = "";
      this.estudiante = {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        provincia: "",
        genero: "",
      };
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

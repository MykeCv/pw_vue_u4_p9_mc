<template>
  <div>
    <h2>Actualización Parcial de Estudiante</h2>

    <input v-model="id" type="number" placeholder="ID del estudiante"/>
    <input v-model="estudiante.nombre" placeholder="Nombre (opcional)" type="text"/>
    <input v-model="estudiante.apellido" placeholder="Apellido (opcional)" type="text"/>
    <input v-model="estudiante.genero" placeholder="Género (opcional)" type="text"/>
    <input v-model="estudiante.provincia" placeholder="Provincia (opcional)" type="text"/>
    <input v-model="estudiante.fechaNacimiento" type="date"/>
    <br/><br/>
    <button @click="actualizarParcial">Actualizar Parcial</button>
  </div>
</template>

<script>
import { actualizarParcialFachada } from "../clients/MatriculaClient.js";

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
    async actualizarParcial() {
      // construir body solo con campos llenos
      const body = {};

      if (this.estudiante.nombre)
        body.nombre = this.estudiante.nombre;

      if (this.estudiante.apellido)
        body.apellido = this.estudiante.apellido;

      if (this.estudiante.genero)
        body.genero = this.estudiante.genero;

      if (this.estudiante.provincia)
        body.provincia = this.estudiante.provincia;

      if (this.estudiante.fechaNacimiento)
        body.fechaNacimiento =
          this.estudiante.fechaNacimiento + "T00:00:00";

      await actualizarParcialFachada(this.id, body);

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

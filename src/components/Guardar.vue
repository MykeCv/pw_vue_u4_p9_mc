<template>
  <div>
    <h2>Registrar Estudiante</h2>

    <input v-model="estudiante.nombre" placeholder="Nombre" type="text" />
    <input v-model="estudiante.apellido" placeholder="Apellido" type="text" />
    <input v-model="estudiante.genero" placeholder="Género" type="text" />
    <input v-model="estudiante.provincia" placeholder="Provincia" type="text" />
    <input v-model="estudiante.fechaNacimiento" type="date" />

    <br /><br />
    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
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
    async guardar() {
      const body = {
        nombre: this.estudiante.nombre,
        apellido: this.estudiante.apellido,
        fechaNacimiento: this.estudiante.fechaNacimiento
          ? this.estudiante.fechaNacimiento + "T00:00:00"
          : null,
        provincia: this.estudiante.provincia,
        genero: this.estudiante.genero,
      };

      await guardarFachada(body);

      // limpiar inputs
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

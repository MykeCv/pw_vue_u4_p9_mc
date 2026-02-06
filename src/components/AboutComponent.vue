<template>
    <div>
        <h1>MATRICULAS UCE</h1>
        <button @click="consumirTodos()">ConsultarTodos</button>
        <button @click="consumirID()">Consultar por ID</button>
        <button>Guardar</button>
        <button>Actualizar</button>
        <button>Actualizar Parcial</button>
        <button>Eliminar</button>
    </div>
</template>

<script>
import {consultarPorIDFachada, consultarTodosFachada, MatriculaCliente} from '../clients/MatriculaClient.js'
export default {
    data(){
        return{
            respuesta1: null,

        };
    },
    methods: {
        async consumirTodos(){
             this.respuesta1 = await consultarTodosFachada();
             console.log(this.respuesta1);
        },
        async consumirID(){
            this.respuesta2 =  await consultarPorIDFachada();
            console.log(this.respuesta2);
        },
        async consumirID(){
            this.respuesta2 =  await consultarPorIDFachada();
            console.log(this.respuesta2);
        },
    },
}
</script>

<style>

</style>
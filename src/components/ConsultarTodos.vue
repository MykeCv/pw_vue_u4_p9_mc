<template>
    <div>
        <button @click="consumirTodos()">ConsultarTodos</button>
  
    </div>
</template>

<script>
import {consultarPorIDFachada} from '../clients/MatriculaClient.js'
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
        }
    },
}
</script>

<style>

</style>
<template>
    <div>
        <button @click="consumirID()">Consultar por ID</button>
    </div>
</template>

<script>
import {consultarPorIDFachada} from '../clients/MatriculaClient.js'
export default {
    data(){
        return{
            respuesta2: null,

        };
    },
    methods: {
       
        async consumirID(){
            this.respuesta2 =  await consultarPorIDFachada();
            console.log(this.respuesta2);
        },

    },
}
</script>

<style>

</style>
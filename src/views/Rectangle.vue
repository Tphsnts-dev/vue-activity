<template>
    <v-text-field v-model="len_value" label="Please Input Length"/>
    <v-text-field v-model="wid_value" label="Please Input Width"/>
    <h1>Answer :{{result}}</h1>
    <br/>
    <v-btn class="center"  outlined color="white" @click = "calculate" >Calculate</v-btn>
</template>


<script>
import { ref } from 'vue'
export default {
setup() {
  const result = ref(0)
  const len_value = ref(0)
  const wid_value = ref(0)
  const calculate = () => {
    result.value = len_value.value * wid_value.value
  }
  return{len_value,wid_value,result,calculate}
},
}
</script>
<style scoped>
.center{
margin-left: auto;
margin-right: auto;
display: flex;
}
h1{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
height: 2em;
display: flex;
align-items: center;
justify-content: center 
}
</style>

<template>
    <v-text-field v-model="side_value" label="Please Input Sides"/>
    <h1>Answer :{{result}}</h1>
    <br/>
    <v-btn class="center" outlined color="white" @click = "calculate">Calculate</v-btn>
  

</template>


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

<script>
import { ref } from 'vue'
export default {
setup() {
  const result = ref(0)
  const side_value = ref(0)
  const calculate = () => {
    result.value = side_value.value *side_value.value
  }
  return{side_value,result,calculate}
},
}
</script>

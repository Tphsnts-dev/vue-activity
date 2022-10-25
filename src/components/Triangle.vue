<template>
    <v-text-field v-model = "base_value" label="Please Input Base"/>
    <v-text-field v-model = "height_value" label="Please Input Height"/>
    <h1>Answer :{{result}}</h1>
    <br/>
    <v-btn class="center" outlined color="white" @click = "calculate">Calculate</v-btn>
</template>


<script>
import { ref } from 'vue'
export default {
setup() {
  const result = ref(0)
  const base_value = ref(0)
  const height_value = ref(0)
  const calculate = () => {
    result.value = (base_value.value * height_value.value) / 2
  }
  return{base_value,height_value,result,calculate}
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

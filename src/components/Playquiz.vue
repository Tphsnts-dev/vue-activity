<template>
   
    <v-card
    class="mx-auto"
    max-width="800px"
    v-if = "!quizeveChecker"
  >
  
  <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5 center display">
          Question # {{count}}
        </v-list-item-title>
        <br/>
        <v-list-item-subtitle class="display-6 center" ><div v-html="question"></div></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <br/>
  <v-card-text>
   <v-list shaped>
    <v-list-item-group>
    <v-list-item v-for="(choice,key) in choices" style="padding:30px"  :key="key" @click="Next"> 
      <v-input type="radio" v-model="data_select" class="display-6 center" v-html="choice" @click="optionClicked(choice)"/>
    </v-list-item>
    </v-list-item-group>
    </v-list>
  </v-card-text>
  </v-card>
  <v-card v-else>
    <v-card-text>
        <h1>You got {{score}}</h1>
    </v-card-text>
</v-card>
    
</template>
<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
name : 'Playquiz',


setup() {
    const quizeveChecker = ref(false)
    const options = {
    method: 'GET',
    url: "https://opentdb.com/api.php?amount=10&category=18&type=multiple",}
    const question = ref("")
    const data_select = ref('')
    const answer = ref("")
    const choices = ref([])
    const count = ref(1)
    const score = ref(0)
    axios.request(options).then(function (response) {
    question.value = response.data.results[0].question
    answer.value = response.data.results[0].correct_answer
    choices.value = response.data.results[0].incorrect_answers
    choices.value.push(answer.value)
    
    
    
   
    for (var i = choices.value.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = choices.value[i];
        choices.value[i] = choices.value[j];
        choices.value[j] = temp;}
        
       
      
    
    
})
    const optionClicked = (choice) => {
      if (choice==answer.value){
        score.value++
      }
    }
    const Next = () => {
    // to increment every button pressed
    count.value++
    let count_arr = 0
    count_arr++
    //in every press questions and answer will change
    axios.request(options).then(function (response) {
    question.value = response.data.results[count_arr].question
    answer.value = response.data.results[count_arr].correct_answer
    choices.value = response.data.results[count_arr].incorrect_answers
    choices.value.push(answer.value)
   
    //to shuffle choices
    for (var i = choices.value.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = choices.value[i];
        choices.value[i] = choices.value[j];
        choices.value[j] = temp;}
    
    
    if (count.value-1 == 10){
      quizeveChecker.value = true
    }
  
    
    
})
    }
     if (data_select.value == answer.value){
      score.value++
    }
    return {question,answer,choices,Next,count,quizeveChecker,score,data_select,optionClicked}
},  
  
}


</script>

<style>
.center{
    text-align: center;
    

}
</style>
<template>
    <v-card class="mx-auto" max-width="800px" v-if = "!quizeveChecker">
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
    <v-progress-linear v-model = "valueDeterminate"></v-progress-linear>

   <v-list shaped>
    <v-list-item-group>
    <v-list-item v-for="(choice,key) in choices" style="padding:30px"  :key="key" @click="next_question($route.params.username)"> 
      <v-input type="radio" v-model="data_select" class="display-6 center" v-html="choice" @click="optionClicked(choice)"/>
    </v-list-item>
    </v-list-item-group>
    </v-list>
    
  </v-card-text>
  </v-card>
  <v-card v-else class = "card">
    <v-card-text>
        <h1 style="text-align:center;">{{$route.params.username}} you got {{score}}</h1>
    </v-card-text>
    <v-row no-gutters> 
    <v-btn x-large color="success" to="/leaderboards"  class="center_1">Leaderboards</v-btn>
    <v-btn x-large color="success" to="/startquiz"  class="center_1">Quit</v-btn>
    <v-btn x-large color="success" :to='"/playquiz/"+$route.params.username' @click="reset" class="center_1">Try Again</v-btn>
    </v-row>
</v-card>
   
</template>
<script>
import axios from 'axios'
import {onBeforeUnmount, onMounted, ref} from 'vue'
import {db} from '@/firebase'
import { collection, addDoc } from "firebase/firestore"; 
export default {
name : 'Playquiz',


setup() {
    const time_count = ref(0)
    const time_count_interval = ref(null)
    const quizeveChecker = ref(false)
    const options = {
    method: 'GET',
    url: "https://opentdb.com/api.php?amount=10&category=18&type=multiple",}
    const question = ref("")
    const data_select = ref('')
    const answer = ref("")
    const choices = ref([])
    const count = ref(0)
    const score = ref(0)
    const valueDeterminate = ref(0)
    const query = ref(false)
    const show = ref(true)
    const interval = ref(0)
    const start_count = () =>{
      time_count_interval.value = setInterval(()=>{
        time_count.value += 1
      },1000)
    }
    const next_question = (username) => {
      count.value++
      let count_arr = 0
      count_arr++
      let controller = new AbortController()
      valueDeterminate.value = 0
      interval.value = 0
    
    if (count.value  == 10) {
        quizeveChecker.value = true
        addDoc(collection(db, "scores_data"), {
        Name: username,
        Score: score.value,
        Duration : time_count.value});
        axios.get("https://opentdb.com/api.php?amount=10&category=18&type=multiple",{signal: controller.signal})
        controller.abort()
        
      
}
    else{
      axios.request(options).then(async function (response) {
      question.value = await response.data.results[count_arr].question
      answer.value = await response.data.results[count_arr].correct_answer
      choices.value = await response.data.results[count_arr].incorrect_answers
      choices.value.push(answer.value)
      for (var i = choices.value.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = choices.value[i]
      choices.value[i] = choices.value[j]
      choices.value[j] = temp 
      }
      })
      
      }
    }
    
    
    const reset =()=>{
      quizeveChecker.value = false
      score.value = 0
      count.value = 1
      valueDeterminate.value = 0
      interval.value = 0
      queryAndIndeterminate()
      
    }

    
    async function queryAndIndeterminate (){
      query.value = true;
      show.value = true;
      valueDeterminate.value = 0
      setTimeout(()=>{
        query.value = false
        interval.value = setInterval(()=>{
          if(valueDeterminate.value === 100){
            clearInterval(interval.value)
            show.value = false
            next_question()
            return setTimeout(queryAndIndeterminate,1000)}
            valueDeterminate.value += 10
            
          },1000)
        },2500) }
   
    const optionClicked = (choice) => {
      if (choice==answer.value){
        score.value++
        
      }
      else{
        valueDeterminate.value = 0
        
      }
      }  
onMounted(()=>{
  queryAndIndeterminate()

})
onBeforeUnmount(()=>{
  clearInterval(interval.value)
})
    start_count()
    next_question()
    return {question,answer,choices,next_question,count,quizeveChecker,score,data_select,optionClicked,valueDeterminate,queryAndIndeterminate,query,show,interval,reset,start_count}
},  
}



</script>

<style>
.center{
    text-align: center;
    

}
.card{
    padding: 14%;
    padding-bottom: 20px;
    display: flex;
    width:70%;
    margin-top: 16%;
    margin-left: auto;
    margin-right: auto;
}
.center_1{
font-size: 15px;
margin-top:20px;
padding: 30px;
margin-left: auto;
margin-right: auto;
display: flex;
width: 35%;
}

</style>
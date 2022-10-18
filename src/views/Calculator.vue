<template>
    <br/>
 <br/>
 <br/>
 <br/>
   <v-text-field v-model = "input1" label="Enter First Number"></v-text-field>
   <v-text-field v-model = "input2" label="Enter Second Number"></v-text-field>
   <v-text-field  readonly>{{total}}</v-text-field>
   <br/>
           <v-row no-gutters> 
           <v-col><v-btn depressed color="white" @click="addition" >Addition</v-btn></v-col>
           <v-col><v-btn depressed color="white" @click="subtraction">Subtraction</v-btn></v-col>
           <v-col><v-btn depressed color="white" @click="multiplication">Multiplication</v-btn></v-col>
           <v-col><v-btn depressed color="white" @click="division">Division</v-btn></v-col>
           <v-col><v-btn depressed color="white" @click="average">Average</v-btn></v-col>
           </v-row>
</template>
<script>
export default{
   data() {
   return {
     total : 0,
     input1 : 0,
     input2 : 0

   }
 },
   methods:{
       addition(){
           return this.total = Number(this.input1) + Number(this.input2)
},
       subtraction(){
           return this.total = Number(this.input1) - Number(this.input2)
},
       multiplication(){
           return this.total = Number(this.input1) * Number(this.input2)
},
       division(){
           return this.total = Number(this.input1) / Number(this.input2)
},
       average(){
           return this.total = (Number(this.input1) + Number(this.input2)) / 2
}

   }
}
</script>
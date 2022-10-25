<template>
    <br/>
 <br/>
 <br/>
 <br/>
   <v-text-field v-model="input" label="Input a String Value:"></v-text-field>
   <v-text-field  readonly>{{output}}</v-text-field>
   <br/>
   <v-row no-gutters > 
       <v-col><v-btn depressed color="white" @click="countVowels">Count Vowels</v-btn></v-col>
       <v-col> <v-btn depressed color="white" @click="countNumbers">Count Numbers</v-btn></v-col>
       <v-col><v-btn depressed color="white" @click="countConsonants">Count Consonants</v-btn></v-col>
       <v-col><v-btn depressed color="white" @click="replaceVowels">Replace Vowels</v-btn></v-col>
       </v-row>
</template>

<script>


export default {
   data() {
   return {
     input : '' ,
     output : ''

   }
},
   methods : {
       countVowels(){
           this.output = this.input.match(/[aeiou]/gi).length;
           return this.output.length;
       },
       countNumbers(){
           this.output = this.input.replace(/[^0-9]/g,"").length;
           return this.output;
       },
       countConsonants(){
           this.output = this.input.split('').filter(e => e.match(/[^aeiou]/) != null).length;
           return this.output
           },
       replaceVowels(){
           this.output = this.input.replace(/[aeiou]/gi, "*");
           return this.output
           },
       }
   }


</script>

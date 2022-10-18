<template>
    <div class="media">
      <img class="mr-3" src="../assets/self-icon.png" alt="Generic placeholder image" 
     style="display: flex;
     margin-left: 40%;
     margin-right: 50%;
     width:250px ;
     height:250px">
      <div class="media-body">
      <h1 class="display-4" style="margin-left:40%;">Tyrhone Paul Santos</h1>
      <br/>
      <p class="lead border-bottom-0" >My Hobbies are playing computer games, as well as 
     taking care of my dog, I aspire to be a Software Engineer in the future since based on my experience 
     coding has been my forte. Currently I'm living in Manila and currently working in Concentrix in Glorietta 
     5 as a source of income and to finance my education</p>
     <br/>
     <h1 class="display-4" >Skills:</h1>
     <br/>
     <p class="lead border-bottom-0" >
     Familiarity in Using Java, Python, Kotlin, SQL and Firebase
    </p>
    <br/>
    <div id="app">
       <v-carousel :show-arrows="true">
         <v-carousel-item
           v-for="(item,i) in items"
           :key="i"
           :src="item.src"
         ></v-carousel-item>
       </v-carousel>
   </div>
   
      
      </div>
     </div>
     </template>
   
     <script>
     export default{
     data () {
       return {
         items: [
           {
             src:"src/assets/img1.png"
           },
           {
             src:"src/assets/img2.png"
           },
           {
             src:"src/assets/img3.png"
           },
           {
             src:"src/assets/img4.png"
           },
         ]
       }
     }
   }
   </script>
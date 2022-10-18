<template>
    <img class="mr-3" src="../assets/self-icon.png" alt="Generic placeholder image">
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
    </div>
  <v-carousel>
    <v-carousel-item style="width "
      v-for="img_data in items"
      :key="img_data.key"
      :src="img_data.src"
    >
    </v-carousel-item>
  </v-carousel>
     </template>
   
     <script>
     
     export default{
        
     data () {
       return {
         items: [
           {
             key : 1,
             src:'src/assets/img1.png'
           },
           {
             key : 2,
             src:'src/assets/img2.png'
           },
           {
            key : 3,
             src:'src/assets/img3.png'
           },
           {
            key : 4,
             src:'src/assets/img4.png'
           },
         ]
       }
     }
   }
   </script>

   <style scoped>
   .mr-3{
     display: flex;
     margin-left: 45%;
     margin-right: 50%;
     width:250px;
     height:250px;
   }
   </style>
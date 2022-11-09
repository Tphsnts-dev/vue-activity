<template>
    <v-card class = "card">
    <v-card-text>
        <h1 style="text-align:center;margin-bottom:30px">{{$route.params.username}} you got {{score}}</h1>
    </v-card-text>
    <v-row no-gutters> 
    <v-btn x-large color="success" to="/leaderboards"  class="center_1">Leaderboards</v-btn>
    <v-btn x-large color="success" to="/startquiz"  class="center_1">Quit</v-btn>
    <v-btn x-large color="success" :to='"/playquiz"+$route.params.username' class="center_1">Try Again</v-btn>
    </v-row>
</v-card>
</template>


<style scoped>
.card{
    padding: 13%;
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
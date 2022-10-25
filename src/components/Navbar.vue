<template>
  <v-app>
      <v-main>
 <v-app-bar color = "white" flat app>
    <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon>
    <v-toolbar-title><h3 class="white">&nbsp;&nbsp;Welcome User</h3></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu
      transition="slide-x-transition"
      bottom
      right
      
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="white"
      >
        Math Menu
      </v-btn>
    </template>

    <v-list class="white">
      <v-list-item
        v-for="item in array_area"
        :key="item.key"
        :to="item.path"
      >
      <v-list-item-action>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item-action>
      </v-list-item>
    </v-list>
    
  </v-menu>
      <v-btn to="/stringmanip" class="white">String Manipulation</v-btn>
      <v-btn to="/axios" class="white">Weather</v-btn>
      <v-btn to="/playquiz" class="white">Play Quiz</v-btn>
      

          
    </v-toolbar-items>
</v-app-bar>
<v-container>
  <router-view/>
</v-container>
  <v-navigation-drawer app v-model="drawer" temporary>
     <v-list>
     <v-list-item v-for="link in link_array" :key="link.text" :to = "link.path">
        <v-list-item-action>
            <v-list-item-title> <v-icon> {{ link.icon }}</v-icon> &nbsp; {{link.text }}</v-list-item-title>
        </v-list-item-action> 
    </v-list-item>     
    </v-list>
 </v-navigation-drawer> 
</v-main>
</v-app>


</template>

<script>
export default {
name: 'App',
data: () => ({
 
  drawer: false,
  link_array:[
    {icon:'mdi-account', text : 'About the Developer', route_name : 'developerinfo', path : '/developerinfo'},
    {icon:'mdi-help', text : 'About the Program', route_name : 'courseinfo', path : '/courseinfo'},
  ],
  array_area:[
   {name : "Area of Triangle", path :'/triangle', key : "1"},
    {name : "Area of Circle", path :'/circle', key : "2"},
    {name : "Area of Square", path :'/square', key : "3"},
    {name : "Area of Rectangle", path :'/rectangle', key : "4"},
    {name : "Calculator", path:"/calculator",key:"5"}
  ],
  
      

}),
};
</script>

<style>
.white{
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: white;
  outline: none;
}
</style>

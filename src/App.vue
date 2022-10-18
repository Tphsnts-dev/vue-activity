<template>
  <Navbar/>
</template>

<script>
import Navbar from './views/Navbar.vue';
export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { Navbar }
}
</script>
<style>
.v-main{
  background-image: url("./assets/bg-image.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

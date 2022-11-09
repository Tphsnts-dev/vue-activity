<template>
    <v-card class = "card">
    <h1>Input Name : </h1>
    <v-text-field class = "txtstyle" v-model="user" label="Name" :rules="rules" outlined shaped></v-text-field>
    <v-btn x-large color="success"  @click="optionClicked"  class="center">Continue</v-btn>
    
</v-card>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default ({
    name : "StartQuiz",
    
    setup() {
        const router = useRouter()
        const user = ref("")
        const optionClicked = () => {
            if (user.value != ""){
                router.push('/playquiz/'+user.value)
            }
        }
        return{user,rules : [value => !!value || 'Please Fill Up Necessary Fields.'],optionClicked}
        
    },
    
})
</script>
<style scoped>
h1{
    margin-bottom: 50px;

}
.card {
    padding : 8%;
    display: flex;
    width:70%;
    margin-top:10%;
    margin-left: auto;
    margin-right: auto;
}
.center {
font-size: 15px;
margin-top:20px;
padding: 30px;
margin-left: auto;
margin-right: auto;
display: flex;
width: 25%;
}
</style>



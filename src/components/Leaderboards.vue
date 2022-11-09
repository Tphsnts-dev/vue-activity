<template>

     <v-container fluid>
      <v-row dense>
        <v-col
          v-for="data in data_table"
          :key="data.id"
          cols="4"

        >
          <v-card>
            
              <v-card-title style="text-align: center;">Name : {{data.name}}</v-card-title>
              <h5 style="text-align: center;">Score : {{data.score}}</h5>
              <h5 style="text-align: center;">Duration : {{data.duration}}</h5>
           

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import { collection, getDocs, limit, orderBy } from "firebase/firestore"
import {db} from '@/firebase'
import {ref, onMounted} from 'vue'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            value: 'name',
        },
          { text: 'Score', value: 'score' },
        ],
    }
},
setup(){
    const data_table = ref ([])
    onMounted(async() => {
        const querySnapshot = await getDocs(collection(db, "scores_data"))
        let data_fetch = []
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
        const data_table = {
            id : doc.id,
            name : doc.data().Name,
            score : doc.data().Score,
            duration : doc.data().Duration

        }
        data_fetch.push(data_table)
});
    data_table.value = data_fetch
})
    return{data_table}
},

      
}
          
</script>
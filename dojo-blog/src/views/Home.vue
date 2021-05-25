<template>
   <div class="home">
      <h1>Home</h1>
      <p ref="p">My name is {{name}} my age is {{age}}</p>
      <button @click="handleClick">Click Me</button>
   </div>
</template>

<script>
import {ref} from 'vue'

export default {
   name: "Home",
   setup(){
      const p = ref(null)
      const name = ref('mario')
      const age = ref(30)

      const handleClick = ()=>{
         name.value = 'Luigi'
         age.value = 30
      }

      return {
         p,
         name,
         age,
         handleClick
      }
   }
};
</script>

<template>
   <form @submit.prevent="handleSubmit"> 
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="text" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign up</button>
   </form>
</template>

<script>
import {ref} from 'vue'

export default {
   setup(){
      const displayName = ref()
      const email = ref()
      const password = ref()

      const handleSubmit = ()=>{
         console.log({
            displayName: displayName.value,
            email: email.value,
            password: password.value
         })
      }

      return {
         displayName,
         email,
         password,
         handleSubmit
      }
   }
}
</script>

<style>

</style>
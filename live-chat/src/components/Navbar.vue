<template>
   <nav>
      <div>
         <p>Hey there ... display name here</p>
         <p class="email">Currently loggin in as ... email</p>
      </div>
      <button @click="handleClick">Logout</button>
   </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
   setup(){
      const {logout, error} = useLogout()
      const handleClick = ()=>{
         await logout()
         if(!error.value){
            console.log('user logout')
         }
      }

      return {handleClick}
   }
}
</script>

<style>

</style>
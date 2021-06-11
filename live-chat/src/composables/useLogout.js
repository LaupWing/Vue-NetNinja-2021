import { ref } from "@vue/reactivity"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logout = async ()=>{
   error.value = null

   try{
      const res = await projectAuth.signOut()
      error.value = null
      return res
   }catch(err){
      error.value = err.message
   }
}

const useLogout = () =>{
   return {
      error,
      logout
   }
}

export default useLogout
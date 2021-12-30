import  { useEffect, useState } from 'react'
import { stringify } from 'uuid';

function useLocalStorageState(key, defaulVal) {
   const [state, setState] = useState(()=>{
       let val;
       try{
           JSON.parse(window.localStorage.getItem(key) || stringify(defaulVal) )
       }
       catch (e){
          val= defaulVal
       }
       return val;
   })

   useEffect(()=>{
       window.localStorage.setItem(state, JSON.stringify(key));
   }, [state])
   return [state, setState]
}

export default useLocalStorageState

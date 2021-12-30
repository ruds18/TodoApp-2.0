import React,{useState} from 'react'

function useToggler(initialval= false) {
   const [state, setState] = useState(initialval)
   const toggler = ()=>{
       setState(!state)
   }
   return [state, toggler]
}

export default useToggler

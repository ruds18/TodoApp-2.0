import React, { useState } from 'react'

function useInputForm(initialval= "") {
    const [value, setValue] = useState(initialval);
    const handelChange =(e)=>{
        setValue(e.target.value);
    }
    const reset =()=>{
        setValue("")
    }
    return [value, handelChange, reset]
}

export default useInputForm

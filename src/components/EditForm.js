import { TextField } from '@material-ui/core'
import React from 'react'
import useInputForm from './hooks/useInputForm'

function EditForm({id, EditTodo, task, toggle}) {
    const [value, handelChange, reset] = useInputForm(task)
    return (
        <div>
         <form 
         style={{marginLeft:"1rem" , width:"100%"}}
         onSubmit={(e)=>{
             e.preventDefault()
             EditTodo(id, value)
             reset()
             toggle()

         }}>
            <TextField margin="normal" value={value} onChange={handelChange} fullWidth autoFocus>
            </TextField>
            </form>
        </div>
    )
}

export default EditForm

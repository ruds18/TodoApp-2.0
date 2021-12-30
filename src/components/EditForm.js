import { IconButton, ListItemSecondaryAction, TextField } from '@material-ui/core'
import React from 'react'
import useInputForm from './hooks/useInputForm'
import CloseIcon from '@material-ui/icons/Close';

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
            <TextField margin="normal" value={value} onChange={handelChange} fullWidth autoFocus required>
            </TextField>
            <ListItemSecondaryAction>
                <IconButton onClick={()=> toggle()}>
                    <CloseIcon color="error"></CloseIcon>
                </IconButton>
            </ListItemSecondaryAction>
            </form>
        </div>
    )
}

export default EditForm

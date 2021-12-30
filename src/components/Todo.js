import  ListItemText  from '@material-ui/core/ListItemText'
import  ListItem  from '@material-ui/core/ListItem'
import React from 'react'
import  ListItemSecondaryAction  from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import useToggler from './hooks/useToggler'
import EditForm from './EditForm'

function Todo({task, completed, id, removeTodo, toggleTodo, EditTodo}) {
    const[isEditing, toggleIsEditing ] = useToggler(false)
    return (
        <div>
            <ListItem>
            {isEditing? (
               <EditForm EditTodo={EditTodo} id={id} task={task} toggle={toggleIsEditing}></EditForm>
            ) :
            <>
             <Checkbox onClick={()=> toggleTodo(id)} checked={completed}></Checkbox>
                <ListItemText style={{textDecoration : completed ? "line-through": "none"}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete"onClick={()=> removeTodo(id)}>
                      <DeleteIcon  />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                      <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </>
            }
            </ListItem>
        </div>
    )
}

export default Todo

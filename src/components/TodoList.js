import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

import Todo from './Todo'
import { Typography } from '@material-ui/core'
function TodoList({ todos, removeTodo , toggleTodo, EditTodo }) {
   if(todos.length) 
   return (
        <Paper>
            {todos.map(t => (
                <>
                    <Todo id={t.id}
                        task={t.task} 
                        key={t.id}
                        completed={t.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        EditTodo={EditTodo}
                        />
                    <Divider />
                </>
            ))}
        </Paper>

    )

    return <Typography variant="body1" > All Todos Completed ! </Typography>
      
       
      
     
}

export default TodoList

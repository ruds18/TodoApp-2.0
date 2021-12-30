import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "../TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
    
    const [todos, setTodos] = useState(initialTodos)
    useEffect(() => {
       window.localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

    const AddTodo = (newTodoText)=>{
        setTodos([...todos, {id:uuidv4(), task: newTodoText , completed: false}])
    }

    const removeTodo = (todoID)=>{
        const updatedTodos = todos.filter(todo => todo.id !== todoID);
        setTodos(updatedTodos);
    }

    const toggleTodo = (todoId) =>{
      const updatedTodo = todos.map(todo =>
             todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(updatedTodo)
    }
    const EditTodo =(todoId, newTask)=>{
        const updatedTodo = todos.map(todo=>
            todo.id === todoId ? {...todo, task:newTask } : todo
            );
        setTodos(updatedTodo)
    }
  return (
    <div>
      <Paper
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
          <AppBar color="primary" position="static" style={{height: "64px" }}>
              <Toolbar>
                  <Typography color="inherit">TODO APP @2.0</Typography>
              </Toolbar>
          </AppBar>

          <Grid container justifyContent="center" style={{marginTop:"1rem"}}>
          <Grid item xs={10} md={8} lg={6} >
          <TodoForm AddTodo={AddTodo}></TodoForm>
          <TodoList   todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} EditTodo={EditTodo} ></TodoList>
          </Grid>
          </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;

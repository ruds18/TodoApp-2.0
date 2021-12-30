import { TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import useInputForm from "./components/hooks/useInputForm";

function TodoForm({ AddTodo }) {
  const [value, handelChange, reset] = useInputForm("");
  return (
    <div>
      <Paper style={{margin:"1rem 0", padding:"0px 1rem"}}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            AddTodo(value);
            reset();
          }}
        >
          <TextField value={value} onChange={handelChange} margin="normal" label="Add new Todo" fullWidth></TextField>
        </form>
      </Paper>
    </div>
  );
}

export default TodoForm;

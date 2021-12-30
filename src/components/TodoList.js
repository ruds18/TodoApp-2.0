
import Paper from '@material-ui/core/Paper'


import Todo from './Todo'
import { Typography } from '@material-ui/core'
import Empty from './Empty'
function TodoList({ todos, removeTodo, toggleTodo, EditTodo,  }) {
    if (todos.length)
        return (
            <Paper>
                {todos.map(t => (
                        <Todo
                            id={t.id}
                            task={t.task}
                            key={t.id}
                            completed={t.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            EditTodo={EditTodo}
                        />
                ))

                }

            </Paper>

        )

    return <Empty></Empty>




}

export default TodoList

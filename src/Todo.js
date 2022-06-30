import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

const handdleTodoClick = () => {
    toggleTodo(todo.id);
}

  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handdleTodoClick} />
        </label>
        {todo.name}
        </div>
  )
}

export default Todo
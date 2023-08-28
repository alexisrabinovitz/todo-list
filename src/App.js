import React, {useState} from 'react'
import './App.css'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        task: inputValue
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='all'>
    <div className='todo-list'>
      <h1>Todo List</h1>
      <div className='todo-form'>
        <input type="text" placeholder='Enter task' value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-items'>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default TodoList
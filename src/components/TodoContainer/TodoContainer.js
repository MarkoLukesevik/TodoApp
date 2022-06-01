import React, {useState} from 'react'
import Todo from '../Todo/Todo'
import Footer from '../Footer/Footer'
import './TodoContainer.css'

export default function TodoContainer({isLight, todos, deleteCompletedTodos, onClickDelete}) {
    const [filter, setFilter] = useState('all')
    
    const [todoObject, setTodoObject] = useState({
      title: '',
      isComplete: false
    })
    
  function toggleComplete(id) {
    let toggleCompleteTodo = todos.find(todo => {
      if (todo.id === id) {
        return true
      }
    })
      toggleCompleteTodo.isComplete = !toggleCompleteTodo.isComplete
      setTodoObject(toggleCompleteTodo)
   }
    
    function renderAllTodos() {
        return todos.filter(todo => {
            if (filter === 'all') {
              return true
            } else if (filter === 'completed') {
              return todo.isComplete
            } else if (filter === 'active') {
              return !todo.isComplete
            }
        }).map(todo => {
          return <Todo key={todo.id} {...todo} isLight={isLight}  onBtnToggle={toggleComplete} onClickDelete={onClickDelete} />
        })
      }

      const handleFilter = (filtered) => {
        setFilter(filtered)
      }
    

  return (
    <div className='main'>
        <div className='todos'>
            {renderAllTodos()}
        </div>

        <Footer isLight={isLight} todos={todos} onFooterItemDelete={deleteCompletedTodos} onFooterItemFilter={handleFilter} />
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import ButtonCircle from '../ButtonCircle/ButtonCircle'
import {generateId} from '../Helpers/GenerateId'
import './Create.css'

export default function Create({isLight, todos, setTodos}) {
    const createClass = isLight ? 'create create-light' : 'create create-dark'
    const createInputClass = isLight ? 'create-input create-input-light' : 'create-input create-input-dark'
    const [todoObject, setTodoObject] = useState({
        title: '',
        isComplete: false
      })

      const [btnClass, setBtnClass] = useState('empty-circle')

      const handleBtnClass = () => {
        if (btnClass === 'empty-circle') {
          setBtnClass('full-circle')
        } else if (btnClass === 'full-circle') {
          setBtnClass('empty-circle')
        }
      }

    useEffect(() => {
        let todoObjectCopy = {...todoObject}
        todoObjectCopy['id'] = generateId()
        setTodoObject(todoObjectCopy)
      },[todos])
    
      function HandleMakingTodo(key, value) {
        let todoObjectCopy = {...todoObject}
        todoObjectCopy[key] = value
        setTodoObject(todoObjectCopy)
      }
    
      function addTodo() {
        setTodos([...todos, todoObject])
        let todoObjectCopy = {...todoObject}
        todoObjectCopy['title'] = ''
        setTodoObject(todoObjectCopy)
        console.log(todoObject)
      }

    function checkEnter(event) {
        if (event.keyCode === 13) {
          addTodo()
        }
    }

    function toggleCreateComplete() {
        let toggleCompleteTodo = {...todoObject}
        toggleCompleteTodo.isComplete = !toggleCompleteTodo.isComplete
        setTodoObject(toggleCompleteTodo)
    }

  return (
        <div className={createClass}>
              <ButtonCircle btnClass={btnClass} handleBtnClass={handleBtnClass} onBtnClick={toggleCreateComplete}/>
              <input 
                  className={createInputClass} 
                  placeholder='Create a new Todo...' 
                  value={todoObject.title} 
                  onChange={ e => HandleMakingTodo('title', e.target.value)} 
                  onKeyDown={checkEnter} 
              >
              </input>
          </div>
  )
}

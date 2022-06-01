import React, {useState} from 'react'
import ButtonCircle from '../ButtonCircle/ButtonCircle'
import './Todo.css'

export default function Todo({title, id, isComplete, isLight,  onBtnToggle, onClickDelete}) {
    const todoClass = isLight ? 'todo todo-light' : 'todo todo-dark'
 
    const [btnClass, setBtnClass] = useState((isComplete === null || isComplete === false) ? 'empty-circle' : 'full-circle')

    const handleBtnClass = () => {
      if (btnClass === 'empty-circle') {
        setBtnClass('full-circle')
      } else if (btnClass === 'full-circle') {
        setBtnClass('empty-circle')
      }
    }
  
  return (
    <div>
        <div className={todoClass} >
            <ButtonCircle id={id} onBtnClick={onBtnToggle} btnClass={btnClass} handleBtnClass={handleBtnClass} />
            <p className='todo-text'>{title}</p>
            <button className='delete' onClick={ () => onClickDelete(id)}>X</button>
        </div>
    </div>
  )
}
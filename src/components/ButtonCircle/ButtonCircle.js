import React from 'react'
import './ButtonCircle.css'

export default function ButtonCircle({onBtnClick, btnClass, id, handleBtnClass}) {

    function handleClick() {
        if (typeof onBtnClick === 'function') {
          handleBtnClass()
          onBtnClick(id)
        }
      }

  return (
      <button onClick={handleClick} className={`circle ${btnClass}`}></button>
  )
}

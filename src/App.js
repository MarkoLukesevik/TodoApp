import React, {useState} from 'react'
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import Create from './components/Create/Create';


function App() {
  const [isLight, setIsLight] = useState(true)
  const [todos, setTodos] = useState([])
  

  const modeIcon = isLight ? './images/icon-moon.svg' : './images/icon-sun.svg'
  const appClass = isLight ? 'App appLight' : 'App appDark'
  const headerClass = isLight ? 'headerLight' : 'headerDark'

 

  function handleMode() {
    setIsLight(prev => !prev)
  }


  function deleteTodo(id) {
    const removeTodo = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(removeTodo)
  }


  function deleteCompleted() {
    const activeTodos = todos.filter(todo => {
      return !todo.isComplete
    })
    setTodos(activeTodos)
  }


  
  
  return (
    <div className={appClass}>
          <header className={`header ${headerClass}`}>
            <div className='header-container'>
                <h1 className='title'>TODO</h1>
                <img onClick={handleMode} src={require(`${modeIcon}`)} alt=''></img>
            </div>
          </header>  
        <div className='container'>

          <Create isLight={isLight} todos={todos} setTodos={setTodos} />
          
          <TodoContainer isLight={isLight} todos={todos} deleteCompletedTodos={deleteCompleted} onClickDelete={deleteTodo}/>
        </div>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList/TodoList'
import Context from './context'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal';

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo/AddTodo'))
  }, 3000)
}))

// import('./Todo/AddTodo/AddTodo')

function App() {
  //хукииии
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
        todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
      {loading && <Loader />}
        <h1 style={{color:'#fff'}}>Todo-List</h1>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {/* {loading && <Loader />} */}
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          loading ? null : (
            <p>no todos!</p>
          )
        )}
      <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;

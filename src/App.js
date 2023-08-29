import { useState } from 'react';
import './App.css';
import Header from './contents/Header';
import Nav from './contents/Nav';
import Patrick from './contents/Patrick';

function App(props) {
  const [todos, setTodos] = useState([]);

  // const onAddList = (title, contents) => {
  //   const newTodo = {'title' : title, 'contents' : contents}
  //   const newTodos = [...todos]
  //   newTodos.push(newTodo)
  //   setTodos(newTodos)
  //   console.log(todos)
  // }

  return (
    <div className="App">
      <Header/>
      <Nav setTodos={setTodos} />
      <Patrick/>
      <div>{todos}</div>
    </div>
  );
}

export default App;

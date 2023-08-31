import React , { useState } from "react";

function Nav(props) {
  const [title_nav, setTitle_nav] = useState('');
  const [contents_nav, setContents_nav] = useState('');

  const [todos, setTodos] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();

    if(title_nav === '') {
      alert('제목을 입력해주세요!');
    }
    else if(contents_nav === '') {
      alert('내용을 입력해주세요!');
    }
    else {
      props.setTitle(title_nav);
      props.setContents(contents_nav)

      const newTodo = {title_nav : title_nav, contents_nav : contents_nav};
      const newTodos = [...todos];
      newTodos.push(newTodo);
      setTodos(newTodos);

      console.log(todos[0].title_nav)
    }
    
    setTitle_nav('');
    setContents_nav('');
  }

  return (
    <nav>
      Title
      <input type='text' value={title_nav} onChange={(e) => setTitle_nav(e.target.value)} />
      Contents
      <input type='text' value={contents_nav} onChange={(e) => setContents_nav(e.target.value)} />
      <button type="button" onClick={onAdd}>ADD</button>
    </nav>
  );
}

export default Nav;
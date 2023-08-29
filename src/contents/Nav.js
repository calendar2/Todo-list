import React , { useState } from "react";

function Nav(props) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onAdd = (e) => {
    e.preventDefault();

    if(title === '') {
      alert('제목을 입력해주세요!');
    }
    else if(contents === '') {
      alert('내용을 입력해주세요!');
    }
    else {
      const newTodo = {'title' : title, 'contents' : contents};
      const newTodos = [...props.todos]
      newTodos.push(newTodo)
      props.setTodos(newTodos);
    }
    
    setTitle('');
    setContents('');
  }

  return (
    <nav>
      Title
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      Contents
      <input type='text' value={contents} onChange={(e) => setContents(e.target.value)} />
      <button type="button" onClick={onAdd}>ADD</button>
    </nav>
  );
}

export default Nav;
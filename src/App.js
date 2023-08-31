import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [todoList, setTodoList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if(title === '') {
      alert('제목을 입력해주세요!');
    }
    else if(contents === '') {
      alert('내용을 입력해주세요!');
    }
    else {
      const nextTodoList = todoList.concat({
        id: todoList.length,
        title: title,
        contents: contents,
        checked: false,
      })

      setTodoList(nextTodoList)
      setTitle('');
      setContents('');
    }
  }

  const onDelete = (id) => {
    setTodoList(todoList.filter(todoItem =>
      todoItem.id !== id
    ));
  };

  const onDone = (id) => {
    setTodoList(todoList.map(todoItem =>
      todoItem.id === id ?
      {...todoItem, checked : !todoItem.checked} : todoItem
    ))
  }

  return (
    <div>
      {/* Head 영역 */}
      <div className='header'>
        <h1>Todo-List</h1>
      </div>

      {/* 작성 영역 */}
      <div className="container">
        <div className='addbox'>
          <div>
            <div>Title</div>
            <div>Contents</div>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <input className='inputTitle' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
              <input className='inputContents' type='text' value={contents} onChange={(e) => setContents(e.target.value)} />
              <input className='inputSubmit' type="submit" value='ADD' />
            </form>
          </div>
        </div>
      </div>

      {/* 목록 영역 */}
      <div className='lists'>
        {todoList.map((todoItem) => (
          <div className='container2'>
            <div className='contentList'>
              <input className='checkbox' type='checkbox' checked={todoItem.checked} />
              {todoItem.checked ? 'Done !' : ''}
              <br/>
              <h2>{todoItem.title}</h2>
              {todoItem.contents}
              <br/><br/><br/>
              <button type='button' className='deleteBtn' onClick={() => onDelete(todoItem.id)}>DELETE</button>
              {todoItem.checked ?
              <button type='button' className='doneBtn' onClick={() => onDone(todoItem.id)}>CANCEL</button> :
              <button type='button' className='doneBtn' onClick={() => onDone(todoItem.id)}>DONE</button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Patrick() {
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
      
    }
    console.log(title)
    console.log(contents)
    setTitle('');
    setContents('');
  }

  return (
    <div>
      <nav>
        Title
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        Contents
        <input type='text' value={contents} onChange={(e) => setContents(e.target.value)} />
        <button type="button" onClick={onAdd}>ADD</button>
      </nav>
      <main>
        <h4>div 안에 main 가능한가?</h4>
      </main>
    </div>
  );
}

export default Patrick;
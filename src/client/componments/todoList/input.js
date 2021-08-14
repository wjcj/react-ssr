import React, { useRef } from 'react';

const Input = ({ addTodo }) => {
  const inputRef = useRef(null);

  const onClick = () => {
    const content = inputRef.current.value.trim();

    addTodo({
      id: new Date().getTime(),
      content,
      completed: false,
    });
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="请输入待办项"/> 
      <button onClick={onClick}>提交</button>
    </div>
  )
};

export default Input;

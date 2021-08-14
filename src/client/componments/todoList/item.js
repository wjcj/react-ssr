import React from 'react';

const Item = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  const { id, content, completed } = todo;
  
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span style={{ textDecoration: completed ? 'line-through' : 'none'}}>{content}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  )
}

export default Item;

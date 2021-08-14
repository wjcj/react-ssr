import React from 'react';
import Input from './input';
import List from './list';

const TodoList = ({ data, addTodo, toggleTodo, removeTodo  }) => {
  return (
    <div>
      <Input addTodo={addTodo} />
      <List list={data} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList;
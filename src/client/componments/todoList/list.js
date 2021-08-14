import React from 'react';
import Item from './item';

const List = ({
  list,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      {
        list.map(todo => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          )
        })
      }
    </div>
  )
}

export default List;

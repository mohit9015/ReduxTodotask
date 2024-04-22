// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    if (!todo.done) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <tr style={{ textDecoration: todo.done ? 'line-through' : 'none'  }}>
      <td>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleToggle}
        //   disabled={todo.done}
        />
      </td>
      <td>{todo.text}</td>
      <td>
        {!todo.done && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;

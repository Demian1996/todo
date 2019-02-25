import React from 'react';
import './index.css';

const Todo = ({ onInput, addItem, toggleStatus, value, list = [] }) => (
  <div className="container">
    <ul className="list">
      {list.map(n => (
        <li className={n.isCompleted ? 'item del' : 'item'} key={n.id}>
          <span>{n.content}</span>
          <span onClick={() => toggleStatus(n)}>x</span>
        </li>
      ))}
    </ul>
    <div className="operator">
      <input type="text" value={value} onChange={onInput} />
      <button onClick={addItem}>添加</button>
    </div>
  </div>
);

export default Todo;

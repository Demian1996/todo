import React from 'react';
import './index.css';

const Todo = ({ inputItemContent, addItem, removeItem, toggleStatus, itemContent, itemList = [] }) => (
  <div className="container">
    <form onSubmit={addItem} className="operator">
      <input type="text" value={itemContent} onChange={inputItemContent} />
      <button type="submit">添加</button>
    </form>
    <ul className="list">
      {itemList.map(n => (
        <li className={n.isCompleted ? 'item del' : 'item'} key={n.id}>
          <input id={n.id} type="checkbox" checked={n.isCompleted ? "checked" : ""} onChange={() => toggleStatus(n)}/>
          <label className={n.isCompleted ? "strike" : ''} htmlFor={n.id}>{n.content}</label>
          <button onClick={() => removeItem(n)}>x</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Todo;

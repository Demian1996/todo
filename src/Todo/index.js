import React from 'react';
import './index.scss';

const Todo = ({ inputItemContent, addItem, removeItem, toggleStatus, itemContent, itemList = [] }) => (
  <div className="todo">
    <form onSubmit={addItem} className="operator">
      <input type="text" maxLength={12} value={itemContent} onChange={inputItemContent} />
      <button type="submit">添加</button>
    </form>
    <ul className="list">
      {itemList.map(n => (
        <li className="item" key={n.id}>
          <input id={n.id} type="checkbox" checked={n.isCompleted ? "checked" : ""} onChange={() => toggleStatus(n)}/>
          <label className={n.isCompleted ? "del" : ''} htmlFor={n.id}>{n.content}</label>
          <button onClick={() => removeItem(n)}>x</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Todo;

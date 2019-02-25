import React from 'react';
import './index.css';
import { ALL, COMPLETED, UNCOMPLETED } from '../const';

const Filter = ({ list, toggleFilter, filterType }) => (
  <div className="filter">
    <button className={filterType === ALL && 'active'} onClick={() => toggleFilter(ALL)}>全部</button>
    <button className={filterType === COMPLETED && 'active'} onClick={() => toggleFilter(COMPLETED)}>已完成</button>
    <button className={filterType === UNCOMPLETED && 'active'} onClick={() => toggleFilter(UNCOMPLETED)}>未完成</button>
    <ul>
      {filterType === ALL && list.map(n => <li key={n.id}>{n.content}</li>)}
      {filterType === COMPLETED && list.filter(n => n.isCompleted).map(n => <li key={n.id}>{n.content}</li>)}
      {filterType === UNCOMPLETED && list.filter(n => !n.isCompleted).map(n => <li key={n.id}>{n.content}</li>)}
    </ul>
  </div>
);

export default Filter;

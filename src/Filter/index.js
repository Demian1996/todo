import React from 'react';
import './index.css';
import { ALL, COMPLETED, UNCOMPLETED } from '../const';

const Filter = ({ toggleFilter, filterType }) => (
  <div className="filter">
    <button className={filterType === ALL ? 'active' : ''} onClick={() => toggleFilter(ALL)}>全部</button>
    <button className={filterType === COMPLETED ? 'active' : ''} onClick={() => toggleFilter(COMPLETED)}>已完成</button>
    <button className={filterType === UNCOMPLETED ? 'active' : ''} onClick={() => toggleFilter(UNCOMPLETED)}>未完成</button>
  </div>
);

export default Filter;

import React from 'react';
import './index.scss';
import { ALL, COMPLETED, UNCOMPLETED } from '../const';
import { inject, observer } from 'mobx-react';

const Filter = inject('store')(
  observer(props => {
    const { toggleFilter, filterType } = props.store;
    console.log(toggleFilter, filterType);
    return (
      <div className="filter">
        <button className={filterType === ALL ? 'active' : ''} onClick={() => toggleFilter(ALL)}>
          全部
        </button>
        <button className={filterType === COMPLETED ? 'active' : ''} onClick={() => toggleFilter(COMPLETED)}>
          已完成
        </button>
        <button className={filterType === UNCOMPLETED ? 'active' : ''} onClick={() => toggleFilter(UNCOMPLETED)}>
          未完成
        </button>
      </div>
    );
  })
);

export default Filter;

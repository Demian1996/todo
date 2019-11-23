import React, { Component } from 'react';
import Todo from './Todo';
import Filter from './Filter';
import { ALL, COMPLETED, UNCOMPLETED } from './const';
import './index.scss';
import todoActions from './todoActions';
class App extends Component {
  constructor(props) {
    super(props);
    this.filterTree = {
      [COMPLETED]: true,
      [UNCOMPLETED]: false
    };
  }
  inputItemContent = e => {
    todoActions.inputItemContent(e.target.value);
  };
  toggleStatus = item => {
    todoActions.toggleStatus(item.id);
  };
  removeItem = item => {
    todoActions.removeItem(item.id);
  };
  addItem = e => {
    e.preventDefault();
    todoActions.addItem({
      id: new Date().getTime(),
      content: this.props.itemContent,
      isCompleted: false
    });
  };
  toggleFilter = type => {
    todoActions.toggleFilterType(type);
  };
  render() {
    const { itemList, itemContent, filterType } = this.props;
    const filteredItemList =
      filterType === ALL ? itemList : itemList.filter(n => n.isCompleted === this.filterTree[filterType]);
    return (
      <div className="container">
        <Filter filterType={filterType} toggleFilter={this.toggleFilter} />
        <Todo
          itemList={filteredItemList}
          itemContent={itemContent}
          inputItemContent={this.inputItemContent}
          addItem={this.addItem}
          toggleStatus={this.toggleStatus}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
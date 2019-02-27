import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Filter from './Filter';
import { ALL, COMPLETED, UNCOMPLETED } from './const';
import './index.scss';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{ id: 1, content: '洗澡', isCompleted: false }, { id: 2, content: '做饭', isCompleted: true }],
      itemContent: '',
      filterType: ALL
    };
    this.filterTree = {
      [COMPLETED]: true,
      [UNCOMPLETED]: false
    };
  }
  inputItemContent = e => {
    this.setState({
      itemContent: e.target.value
    });
  };
  toggleStatus = item => {
    item.isCompleted = !item.isCompleted;
    this.setState({
      itemList: this.state.itemList
    });
  };
  removeItem = n => {
    this.setState(prevState => ({
      itemList: prevState.itemList.filter(x => x.id !== n.id)
    }));
  };
  addItem = e => {
    e.preventDefault();
    const itemList = this.state.itemList;
    itemList.push({
      id: new Date().getTime(),
      content: this.state.itemContent,
      isCompleted: false
    });
    this.setState({
      itemList,
      itemContent: ''
    });
  };
  toggleFilter = type => {
    this.setState({
      filterType: type
    });
  };
  render() {
    const { itemList, itemContent, filterType } = this.state;
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
ReactDOM.render(<App />, document.getElementById('root'));

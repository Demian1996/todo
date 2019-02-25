import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Filter from './Filter';
import { ALL, COMPLETED, UNCOMPLETED } from './const';
import './index.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 1, content: '洗澡', isCompleted: false }, { id: 2, content: '做饭', isCompleted: true }],
      value: '',
      filterType: ALL
    };
  }
  onInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  toggleStatus = item => {
    item.isCompleted = !item.isCompleted;
    this.setState({
      list: this.state.list
    });
  };
  addItem = () => {
    const list = this.state.list;
    list.push({
      id: new Date().getTime(),
      content: this.state.value,
      isCompleted: false
    });
    this.setState({
      list,
      value: ''
    });
  };
  toggleFilter = type => {
    this.setState({
      filterType: type
    });
  };
  render() {
    const { list, value, filterType } = this.state;
    return (
      <div className="stage">
        <Todo
          list={list}
          value={value}
          onInput={this.onInput}
          addItem={this.addItem}
          toggleStatus={this.toggleStatus}
        />
        <Filter list={list} filterType={filterType} toggleFilter={this.toggleFilter} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

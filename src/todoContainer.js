import React from 'react';
import { Container } from 'flux/utils';
import App from './App';
import todoStore from './todoStore';

class TodoContainer extends React.Component {
  static getStores() {
    return [todoStore];
  }

  static calculateState() {
    return todoStore.getState();
  }

  render() {
    return <App {...this.state} />;
  }
}

export default Container.create(TodoContainer);

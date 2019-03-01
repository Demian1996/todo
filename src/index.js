import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Filter from './Filter';
import store from './Store';
import './index.scss';
import { observer, Provider } from 'mobx-react';

// 1.class可以使用装饰器模式
// @observer
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Filter />
//         <Todo />
//       </div>
//     )
//   }
// }

// 2.使用函数组件，将store中的数据分派到其他组件
// const App = observer((props) => {
//   const { itemContent, filterType, filteredItemList } = props.store;
//   return (
//     <div>
//       <Filter filterType={filterType} />
//       <Todo filteredItemList={filteredItemList} itemContent={itemContent} />
//     </div>
//   )
// });

// 3.使用provider注入
const App = () => (
  <div className="container">
    <Filter />
    <Todo />
  </div>
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

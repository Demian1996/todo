import { observable, computed, autorun, action } from 'mobx';
import { ALL, COMPLETED, UNCOMPLETED } from './const';

class Store {
  filterTree = {
    [COMPLETED]: true,
    [UNCOMPLETED]: false
  };

  @observable itemList = [
    { id: 1, content: '洗澡', isCompleted: false },
    { id: 2, content: '做饭', isCompleted: true }
  ];

  @observable itemContent = '';

  @observable filterType = ALL;

  @computed get filteredItemList() {
    return this.filterType === ALL
      ? this.itemList
      : this.itemList.filter(n => n.isCompleted === this.filterTree[this.filterType]);
  }

  @action.bound
  addItem(e) {
    e.preventDefault();
    this.itemList.push({
      content: this.itemContent,
      isCompleted: false,
      id: new Date().getTime()
    });
    this.itemContent = '';
  }
  @action.bound
  inputItemContent(e) {
    this.itemContent = e.target.value;
  }
  @action.bound
  removeItem(item) {
    this.itemList = this.itemList.filter(n => n.id !== item.id);
  }
  @action.bound
  toggleStatus(n) {
    n.isCompleted = !n.isCompleted;
  }
  @action.bound
  toggleFilter(type) {
    this.filterType = type;
  }
}
const store = (window.store = new Store());
// autorun(() => {
//   console.log(store.filteredItemList);
// })
export default store;

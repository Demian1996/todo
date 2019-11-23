import { ReduceStore } from 'flux/utils';
import { ALL, COMPLETED, UNCOMPLETED } from './const';
import dispatcher from './todoDispatcher';
class TodoStore extends ReduceStore {
  getInitialState() {
    return {
      itemList: [
        { id: 1, content: '洗澡', isCompleted: false },
        { id: 2, content: '做饭', isCompleted: true }
      ],
      itemContent: '',
      filterType: ALL
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, itemList: state.itemList.concat(action.payload) };
      case 'REMOVE_ITEM':
        return { ...state, itemList: state.itemList.filter(x => x.id !== action.payload) };
      case 'INPUT_ITEM_CONTENT':
        return { ...state, itemContent: action.payload };
      case 'TOGGLE_STATUS':
        const nextList = [...state.itemList];
        const nextItem = nextList.find(x => x.id === action.payload);
        if (nextItem) {
          nextItem.isCompleted = !nextItem.isCompleted;
        }
        return { ...state, itemList: nextList };
      case 'TOGGLE_FILTER_TYPE':
        return { ...state, filterType: action.payload };
      default:
        return state;
    }
  }
}

export default new TodoStore(dispatcher);

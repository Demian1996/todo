import dispatcher from './todoDispatcher';

export default {
  addItem(payload) {
    dispatcher.dispatch({
      type: 'ADD_ITEM',
      payload
    });
  },
  removeItem(payload) {
    dispatcher.dispatch({
      type: 'REMOVE_ITEM',
      payload
    });
  },
  toggleFilterType(payload) {
    dispatcher.dispatch({
      type: 'TOGGLE_FILTER_TYPE',
      payload
    });
  },
  toggleStatus(payload) {
    dispatcher.dispatch({
      type: 'TOGGLE_STATUS',
      payload
    });
  },
  inputItemContent(payload) {
    dispatcher.dispatch({
      type: 'INPUT_ITEM_CONTENT',
      payload
    });
  }
};

export default (propsItem, localstorageItem) => {
  let event = propsItem;
    if(Object.keys(event).length === 0) {
      event = JSON.parse(localStorage.getItem(localstorageItem));
    }
    return event;
};

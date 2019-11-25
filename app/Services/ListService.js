import List from "../Models/List.js";
import store from "../store.js";
import Item from "../Models/Item.js";

//Public
class ListService {
  removeItem(id, listId) {
    debugger;
    if (window.confirm("Do you want to remove this item?")) {
      let removeFromList = store.State.lists.find(i => i.id == listId);
      let removeItem = removeFromList.items.findIndex(i => i.id == id);
      removeFromList.items.splice(removeItem, 1);
    }
    store.saveState();
  }
  createItem(newItem) {
    console.log(store.State);

    let item = new Item(newItem);
    let List = store.State.lists.find(l => l.id == item.listId);

    List.items.push(item);
    store.saveState();
    console.log(store.State);
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  createList(newList) {
    console.log("hello from Service");
    let list = new List(newList);
    store.State.lists.push(list);
    store.saveState();
  }
  removeLists(id) {
    let removeList = store.State.lists.findIndex(l => l.id == id);

    if (window.confirm("Do you want to remove this list?")) {
      store.State.lists.splice(removeList, 1);
    }
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;

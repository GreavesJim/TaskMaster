import List from "../Models/List.js";
import store from "../store.js";
import Item from "../Models/Item.js";

//Public
class ListService {
  createItem(newItem) {
    debugger;
    let item = new Item(newItem);

    store.State.item.push(item);
    store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  createList(newList) {
    console.log("hello from Service");
    debugger;
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

import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = "";
  let lists = store.Lists;
  lists.forEach(list => {
    listTemplate += list.Template;
  });
  document.querySelector("#new-items").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  createList(event) {
    event.preventDefault();
    console.log("hello from Controller");

    let formData = event.target;
    let newList = {
      name: formData.name.value
    };

    ListService.createList(newList);
    formData.reset();
    _drawLists();
  }

  removeLists(id) {
    ListService.removeLists(id);
    _drawLists();
  }

  removeItem(id, listId) {
    ListService.removeItem(id, listId);
    _drawLists();
  }

  createItem(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      name: formData.name.value,
      listId: listId
    };
    ListService.createItem(newItem);
    formData.reset();
    _drawLists();
  }
}

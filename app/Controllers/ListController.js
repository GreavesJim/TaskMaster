import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = "";
  let lists = store.Lists;
  lists.forEach(list => {
    listTemplate += list.Template;
    document.querySelector("#new-items").innerHTML = listTemplate;
  });
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    debugger;
    _drawLists();
  }
  createList(event) {
    debugger;
    event.preventDefault();
    console.log("hello from Controller");

    let formData = event.target;
    let newList = {
      name: formData.name.value,
      id: ""
    };

    ListService.createList(newList);
    formData.reset();
    _drawLists();
  }

  removeLists(id) {
    ListService.removeLists(id);
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems

  createItem(event) {
    event.preventDefault();
    debugger;
    let formData = event.target;
    let newItem = {
      name: formData.name.value
    };
    ListService.createItem(newItem);
    formData.reset();
    _drawLists();
  }
}

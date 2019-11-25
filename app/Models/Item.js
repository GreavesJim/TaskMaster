import { generateId } from "../utils.js";
export default class Item {
  constructor(data) {
    this.name = data.name;
    this.listId = data.listId;
    this.id = data.id || generateId();
  }

  get Template() {
    //FIXME needs to pass in the listId
    return `
  <dt> ${this.name}</dt>
  <button type="button" class="btn btn-outline btn-danger" 
  onclick="app.listController.removeItem('${this.id}', '${this.listId}')">X</button> 
  `;
  }
}

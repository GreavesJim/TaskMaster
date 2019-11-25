import { generateId } from "../utils.js";
import Item from "./Item.js";

export default class List {
  constructor({ id = generateId(), name, items = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = name;
    this.id = id;
    this.items = items.map(i => new Item(i));
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return `
    <div class="col-12 col-md-4">
      <div class="card text-black bg-dark mb-3">
        <div class="card-body">
          <h3 class="color-success">${this.name}</h3>
          <h5 class="card-title">Secondary card title</h5>
          <form onsubmit="app.listController.createItem(event, '${this.id}')">
            <div class="form-group">
              <input type="text" placeholder="stuff" name="name" />
            </div>
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </form>
          <hr />
          ${this.getItemTemplates()}
        </div>
        <button
          class="btn btn-danger"
          type="button"
          onclick="app.listController.removeLists('${this.id}')"
        >
          Delete
        </button>
      </div>
    </div>
    `;
  }

  getItemTemplates() {
    let template = "";
    this.items.forEach(items => {
      template += items.Template;
    });
    return template;
  }
}

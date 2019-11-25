import { generateId } from "../utils.js";
export default class Item {
  constructor(data) {
    this.name = data.name;
    this.id = data.id || generateId();
    this.taskId = data.taskId || generateId();
  }

  get Template() {
    return `
  
  <dt> ${this.name}</dt>
  <button class="btn btn-outline btn-danger" 
  onclick="app.sessionsController.removeItem('${this.taskId}','${this.id}')">X</button>
  
  
  
  
  `;
  }
}

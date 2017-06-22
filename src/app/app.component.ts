import { Component } from '@angular/core';
import { TodoItem } from './shared/todoItem';

const ITEMS: TodoItem[] = [
  {id: 1, state: 'active', name: 'eat'},
  {id: 2, state: 'active', name: 'sleep'}
];

let DISPLAYSTATE = 'all';

@Component({
  selector: 'my-app',
  template: `
    <section class="todoapp">
      <header class="header">
        <h1>{{name}}</h1>
        <input 
          #newTodo
          (keyup.enter)="addNewTodo(newTodo.value); newTodo.value='' "
          class="new-todo" 
          placeholder="What needs to be done?" 
          autofocus>
      </header>

      <section class="main">
        <input class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <todo-list 
            [allItems]="items"
            *ngFor="let item of items | statefilter:displayState" 
            [item]="item"
          > 
          </todo-list>
        </ul>
      </section>

      <display-group [(activeDisplayState)]="displayState"></display-group>
    </section>
  `,
})
export class AppComponent  {
  name = 'qwerty';
  items = ITEMS;
  displayState = DISPLAYSTATE;
  value = '';
  addNewTodo(value: string) {
    console.log('state from main component', this.displayState);
    console.log('all items from main component', this.items);
    this.value = value;
    console.log(this.value);
    this.items.push({
      id: 0,
      state: 'active',
      name: value
    });
  }
}


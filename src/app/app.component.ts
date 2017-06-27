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
            [activeCount]="activeCount"
            (onCountChange)="onCountChange($event)"
          > 
          </todo-list>
        </ul>
      </section>

      <display-group
        [activeCount]="activeCount" 
        [allItems]="items"
        (onClearComplete)="onClearComplete($event)"
        [activeDisplayState]="displayState"
        (onDisplayChange)="onDisplayChange($event)"
      >
      </display-group>
    </section>
  `,
})
export class AppComponent  {
  name = 'qwerty';
  items = ITEMS;
  displayState = DISPLAYSTATE;
  value = '';
  activeCount = (function(allItems: TodoItem[]): number {
    let count = 0;
    for (let item of allItems) {
      if (item.state === 'active') {
        count++;
      }
    }
    return count;
  })(this.items);

  addNewTodo(value: string) {
    this.value = value;
    this.items.push({
      id: 0,
      state: 'active',
      name: value
    });
  }

  onDisplayChange(value: string) {
    this.displayState = value;
  }

  onClearComplete(values: TodoItem[]) {
    this.items = values;
  }

  onCountChange(value: number) {
    this.activeCount = value;
  }
}


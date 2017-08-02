import { Component } from '@angular/core';
import { TodoItem } from './shared/todoItem';

const ITEMS: TodoItem[] = [
  {id: 1, state: 'active', name: 'eat'},
  {id: 2, state: 'active', name: 'sleep'}
];

let DISPLAYSTATE = 'all';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' 
})
export class AppComponent  {
  name = 'AngularTODO';
  items: TodoItem[] = ITEMS;
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

  addNewTodo(value: string): void {
    this.value = value;
    this.items.push(new TodoItem(0, 'active', value));
    this.activeCount++;
  }

  onDisplayChange(value: string): void {
    this.displayState = value;
  }

  onClearComplete(values: TodoItem[]): void {
    this.displayState = 'all';
    this.items = values;
  }

  onCountChange(value: number): void {
    this.activeCount = value;
  }

  toggleAllStatus(): void {
    let anyStatusActive = false;
    for (let item of this.items) {
      if (item.state === 'active') {
        anyStatusActive = true;
      }
    }

    if (anyStatusActive) {
      for (let item of this.items) {
        item.state = 'completed';
      }
      this.activeCount = 0;
    } else {
      for (let item of this.items) {
        item.state = 'active';
      }
      this.activeCount = this.items.length;
    }
  }

  checkForItems(): boolean {
    if (this.items.length > 0) return true;
    else return false; 
  }
}

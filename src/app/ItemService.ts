import { Injectable } from "@angular/core";
import { TodoItem } from "./shared/todoItem";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ItemService {
  public items: TodoItem[] = [];

  //  Default app to show all items
  public displayState = "all";

  public getItems(): Observable<TodoItem[]> {
    return Observable.of(this.items);
  }

  // public getDisplayState(): Observable<string> {
  //     return Observable.of(this.displayState);
  // }

  public getDisplayState(): string {
    return this.displayState;
  }

  // public addNewTodo(value: string): void {
  //     this.items.push(new TodoItem("active", value));
  // }

  public removeTodo(item: TodoItem): void {
    this.items.splice(this.items.indexOf(item), 1);
  }

  public clearComplete(): void {
    this.displayState = "all";
    this.items.forEach((item: TodoItem, index: number) => {
      if (item.state === "completed") {
        this.items.splice(index, 1);
      }
    });

    // for (let i = this.items.length; i >= 0; i--) {
    //   if (this.items[0] && this.items[i].state === "completed")
    //     this.items.splice(i, 1);
    // }
  }

  public toggleItemStatus(refItem: TodoItem): void {
    this.items.forEach((item: TodoItem) => {
      if (item.name === refItem.name) {
        if (item.state === "active") {
          item.state = "completed";
        } else {
          item.state = "active";
        }
      }
    });
  }

  public toggleStatuses(anyStatusActive: boolean): void {
    if (anyStatusActive) {
      for (let item of this.items) {
        item.state = "completed";
      }
    } else {
      for (let item of this.items) {
        item.state = "active";
      }
    }
  }
}

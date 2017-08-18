import { Injectable } from "@angular/core";
import { TodoItem } from "./shared/todoItem";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ItemService {
    public items: TodoItem[] = [];

    //  Default app to show all items
    public displayState = "all";

    public getItems(): Observable<TodoItem[]> {
        console.log(`this.items ${this.items}`);
        // return Observable.of(
        //     this.items.filter((item: TodoItem) => {
        //         if (this.displayState === "all") {
        //             return true;
        //         } else {
        //             return item.state === this.displayState;
        //         }
        //     })
        // );
        return Observable.of(this.items);
    }

    public getDisplayState(): Observable<string> {
        console.log(`this.displayState ${this.displayState}`);
        return Observable.of(this.displayState);
    }

    // Brought into DisplayGroup, only needed in that single comp
    // public activeCount(): number {
    //     return this.items.filter((item: TodoItem) => {
    //         return item.state === "active";
    //     }).length;
    // }

    public addNewTodo(value: string): void {
        this.items.push(new TodoItem("active", value));
    }

    public removeTodo(item: TodoItem): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public clearComplete(): void {
        console.log("item service clear complete");
        this.displayState = "all";
        this.items = this.items.filter((item: TodoItem) => {
            return item.state === "active";
        });
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

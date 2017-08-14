import { Injectable } from "@angular/core";
import { TodoItem } from "./shared/todoItem";

@Injectable()
export class ItemService {
    public items: TodoItem[] = [];

    //  Default app to show all items
    public displayState = "all";

    public activeCount(): number {
        return this.items.filter((item: TodoItem) => {
            return item.state === "active";
        }).length;
    }

    public addNewTodo(value: string): void {
        this.items.push(new TodoItem("active", value));
    }

    public clearComplete(): void {
        this.displayState = "all";
        this.items = this.items.filter((item: TodoItem) => {
            return item.state === "active";
        });
    }

    public toggleStatus(anyStatusActive: boolean): void {
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

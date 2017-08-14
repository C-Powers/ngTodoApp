import { Component } from "@angular/core";
import { TodoItem } from "./shared/todoItem";
import { ItemService } from "./ItemService";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    public name = "AngularTODO";
    public items: TodoItem[] = this.itemService.items;
    public displayState: string = this.itemService.displayState;
    public activeCount: number = this.itemService.activeCount();

    constructor(public itemService: ItemService) {}

    addNewTodo(value: string): void {
        this.itemService.addNewTodo(value);
        this.activeCount = this.itemService.activeCount();
    }

    toggleAllStatus(): void {
        let anyStatusActive = false;
        for (let item of this.items) {
            if (item.state === "active") {
                anyStatusActive = true;
            }
        }

        this.itemService.toggleStatus(anyStatusActive);
        this.activeCount = this.itemService.activeCount();
    }

    checkForItems(): boolean {
        if (this.items.length > 0) return true;
        else return false;
    }
}

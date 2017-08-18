import { Component, OnInit } from "@angular/core";
import { TodoItem } from "./shared/todoItem";
import { ItemService } from "./ItemService";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public name = "AngularTODO";
    public items: TodoItem[] = this.itemService.items;
    public _items: TodoItem[];
    public displayState: string = this.itemService.displayState;
    public _displayState: string;
    public activeCount: number = this.itemService.activeCount();

    constructor(public itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getItems().subscribe(data => (this._items = data));
        this.itemService
            .getDisplayState()
            .subscribe(data => (this._displayState = data));
        console.log(`this._items ${this._items}`);
    }

    ds() {
        return this._displayState;
    }

    addNewTodo(value: string): void {
        console.log(this._items);
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

        this.itemService.toggleStatuses(anyStatusActive);
        this.activeCount = this.itemService.activeCount();
    }

    checkForItems(): boolean {
        if (this.items.length > 0) return true;
        else return false;
    }
}

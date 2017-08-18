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
    // public items: TodoItem[] = this.itemService.items;
    public items: TodoItem[];
    public displayState: string = this.itemService.displayState;
    public _displayState: string;

    constructor(public itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getItems().subscribe(data => (this.items = data));

        this.itemService
            .getDisplayState()
            .subscribe(data => (this._displayState = data));

        // this.itemService
        //     .getActiveCount()
        //     .subscribe(data => (this._activeCount = data));

        console.log(`this.items ${this.items}`);
    }

    addNewTodo(value: string): void {
        console.log(this.items);
        this.itemService.addNewTodo(value);
    }

    toggleAllStatus(): void {
        let anyStatusActive = false;
        for (let item of this.items) {
            if (item.state === "active") {
                anyStatusActive = true;
            }
        }

        this.itemService.toggleStatuses(anyStatusActive);
    }

    checkForItems(): boolean {
        if (this.items.length > 0) return true;
        else return false;
    }
}

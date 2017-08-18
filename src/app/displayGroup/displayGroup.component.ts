import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../shared/todoItem";
import { ItemService } from "../ItemService";

@Component({
    selector: "display-group",
    templateUrl: "./displayGroup.component.html"
})
export class DisplayGroupComponent implements OnInit {
    public activeDisplayState: string = this.itemService.displayState;

    public buttons = [
        { name: "all", state: "selected" },
        { name: "active", state: "not-selected" },
        { name: "completed", state: "not-selected" }
    ];

    constructor(public itemService: ItemService) {}

    public ngOnInit() {
        // this.itemService
        //     .getActiveCount()
        //     .subscribe(data => (this._activeCount = data));
        // console.log(`this._activeCount ${this._activeCount}`);
    }

    public itemCount() {
        return this.itemService.activeCount();
    }

    public updateDisplayState(buttonType: string): void {
        for (let button of this.buttons) {
            if (button.name === buttonType) {
                button.state = "selected";
            } else {
                button.state = "not-selected";
            }
        }

        this.itemService.displayState = buttonType;
        // this.onDisplayChange.emit(buttonType);
    }

    public checkForCompleted(): boolean {
        let anyComplete = false;
        for (let item of this.itemService.items) {
            if (item.state === "completed") {
                console.log("item state is completed");
                anyComplete = true;
            }
        }
        return anyComplete;
    }

    public clearComplete(): void {
        this.itemService.clearComplete();
    }
}

import { Component } from "@angular/core";
import { TodoItem } from "../shared/todoItem";
import { ItemService } from "../ItemService";

@Component({
    selector: "display-group",
    templateUrl: "./displayGroup.component.html"
})
export class DisplayGroupComponent {
    public activeDisplayState: string = this.itemService.displayState;

    public buttons = [
        { name: "all", state: "selected" },
        { name: "active", state: "not-selected" },
        { name: "completed", state: "not-selected" }
    ];

    constructor(public itemService: ItemService) {}

    public activeCount(): number {
        return this.itemService.items.filter((item: TodoItem) => {
            return item.state === "active";
        }).length;
    }

    public updateDisplayState(buttonType: string): void {
        console.log("old display state", this.itemService.displayState);
        for (let button of this.buttons) {
            if (button.name === buttonType) {
                button.state = "selected";
            } else {
                button.state = "not-selected";
            }
        }

        this.itemService.displayState = buttonType;
        console.log("new display state", this.itemService.displayState);
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

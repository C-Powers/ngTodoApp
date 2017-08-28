import { Component, Input } from "@angular/core";
import { ItemService } from "../ItemService";
import { TodoItem } from "../shared/todoItem";

@Component({
    selector: "todo-list",
    templateUrl: "./todoList.component.html"
})
export class TodoListComponent {
    @Input() public item: TodoItem;

    public isEdit = false;

    constructor(public itemService: ItemService) {}

    isEditing(): string {
        if (this.isEdit) return "editing";
        return "";
    }

    stateToggle(): void {
        this.itemService.toggleItemStatus(this.item);
    }

    destroyItem(): void {
        console.log(this.itemService.items);
        console.log("destroying item");
        this.itemService.removeTodo(this.item);
    }

    setCheckedState(): boolean {
        if (this.item.state === "completed") return true;
        else if (this.item.state === "active") return false;
    }

    editItem(newItemName: string): void {
        console.log(newItemName);
        this.item.name = newItemName;
        this.isEdit = false;
    }

    onInputBlur(): void {
        this.isEdit = false;
    }

    onEscapePress(event: any): void {
        if (event.key === "Escape") {
            this.isEdit = false;
            return;
        } else {
            return;
        }
    }
}

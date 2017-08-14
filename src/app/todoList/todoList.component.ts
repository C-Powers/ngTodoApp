import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoItem } from "../shared/todoItem";

@Component({
    selector: "todo-list",
    templateUrl: "./todoList.component.html"
})
export class TodoListComponent {
    @Input() item: TodoItem;
    @Input() allItems: TodoItem[];

    @Input() activeCount: number;
    @Output() onCountChange = new EventEmitter<number>();

    public isEdit = false;

    /**
     * testing testing what's this all about
     * Something something look at this {@link TodoItem}
     */
    isEditing(): string {
        /**
         * this is a test comment
         * @type something
         * @return something else
         */
        if (this.isEdit) return "editing";
        return "";
    }

    stateToggle(): void {
        if (this.item.state === "active") {
            this.item.state = "completed";
            this.activeCount--;
        } else {
            this.item.state = "active";
            this.activeCount++;
        }

        this.onCountChange.emit(this.activeCount);
    }

    destroyItem(): void {
        this.allItems.splice(this.allItems.indexOf(this.item), 1);
        if (this.item.state === "active") {
            this.activeCount--;
            this.onCountChange.emit(this.activeCount);
        }
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

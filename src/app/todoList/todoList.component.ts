import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../shared/todoItem';

@Component({
    selector: 'todo-list',
    template: `
        <li *ngIf="item" class={{item.state}}>
            <div class="view">
                <input
                    (click)="stateToggle($event)" 
                    class="toggle" 
                    type="checkbox"
                    [checked]="setCheckedState()"
                >
                <label *ngIf="!isEdit"
                    (click)="isEdit=true"
                >
                    {{item.name}}
                </label>
                <input *ngIf="isEdit"
                    #editItemInput 
                    (keydown.enter)="editItem(editItemInput.value)"
                    (keydown)="onEscapePress($event)"
                    class="new-todo"
                    placeholder="Edit This Item"
                    value="{{item.name}}"
                    (blur)="onInputBlur()"
                    focus-me="true"
                >
                <button 
                    (click)="destroyItem()"
                    class="destroy"
                >
                </button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `,
})

export class TodoListComponent {
    @Input() item: TodoItem;
    @Input() allItems: TodoItem[];

    @Input() activeCount: number;
    @Output() onCountChange = new EventEmitter<number>();

    isEdit = false;

    stateToggle(event: any): void {
        if (this.item.state === 'active') {
            this.item.state = 'completed';
            this.activeCount--;
        } else {
            this.item.state = 'active';
            this.activeCount++;
        }

        this.onCountChange.emit(this.activeCount);
    }

    destroyItem(): void {
        this.allItems.splice(this.allItems.indexOf(this.item), 1);
        if (this.item.state === 'active') {
            this.activeCount--;
            this.onCountChange.emit(this.activeCount);
        }
    }

    setCheckedState(): boolean {
        if (this.item.state === 'completed') return true;
        else if (this.item.state === 'active') return false;
    }

    editItem(newItemName: any): void {
        console.log(newItemName);
        this.item.name = newItemName;
        this.isEdit = false;
    }

    onInputBlur(): void {
        this.isEdit = false;
    }

    onEscapePress(event: any): void {
        if (event.key === 'Escape') {
            this.isEdit = false;
            return;
        } else {
            return;
        }
    }
}

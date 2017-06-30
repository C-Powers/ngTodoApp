import { Component, EventEmitter, Input, Output, Renderer } from '@angular/core';
import { TodoItem } from './shared/todoItem';

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
                <label>{{item.name}}</label>
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

    stateToggle(event: any) {
        if (this.item.state === 'active') {
            this.item.state = 'completed';
            this.activeCount--;
        } else {
            this.item.state = 'active';
            this.activeCount++;
        }

        this.onCountChange.emit(this.activeCount);
    }

    destroyItem() {
        this.allItems.splice(this.allItems.indexOf(this.item), 1);
        if (this.item.state === 'active') {
            this.activeCount--;
            this.onCountChange.emit(this.activeCount);
        }
    }

    setCheckedState() {
        if (this.item.state === 'completed') return true;
        else if (this.item.state === 'active') return false;
    }
}

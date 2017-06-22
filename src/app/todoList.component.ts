import { Component, Input, Renderer } from '@angular/core';
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

    stateToggle(event: any) {
        if (this.item.state === 'active') {
            this.item.state = 'completed';
        } else {
            this.item.state = 'active';
        }
    }

    destroyItem() {
        this.allItems.splice(this.allItems.indexOf(this.item), 1);
    }
}

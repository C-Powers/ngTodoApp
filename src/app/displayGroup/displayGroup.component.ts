import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../shared/todoItem';

@Component({
    selector: 'display-group',
    templateUrl: './displayGroup.component.html'
})

export class DisplayGroupComponent {
    @Input() activeCount: number;

    @Input() allItems: TodoItem[];
    @Output() onClearComplete = new EventEmitter<TodoItem[]>();

    @Input() activeDisplayState: string;
    @Output() onDisplayChange = new EventEmitter<string>();

    public buttons = [
        {name: 'all', state: 'selected'},
        {name: 'active', state: 'not-selected'},
        {name: 'completed', state: 'not-selected'}
    ];

    // onlyActiveTodos: TodoItem[];

    public updateDisplayState(buttonType: string): void {
        for (let button of this.buttons) {
            if (button.name === buttonType) {
                button.state = 'selected';
            } else {
                button.state = 'not-selected';
            }
        }

        this.onDisplayChange.emit(buttonType);
    }

    public checkForCompleted(): boolean {
        for (let item of this.allItems) {
            if (item.state === 'completed') {
                return true;
            }
        }
        return false;
    }

    public clearCompleted(): void {
        const onlyActive = this.allItems.filter((item) => {
            if (item.state === 'active') {
                return item;
            }
        });

        this.updateDisplayState('all');

        this.onClearComplete.emit(onlyActive);
    }
}

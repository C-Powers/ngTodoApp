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

    updateDisplayState(buttonType: string): void {
        for (let button of this.buttons) {
            if (button.name === buttonType) {
                button.state = 'selected';
            } else {
                button.state = 'not-selected';
            }
        }

        this.onDisplayChange.emit(buttonType);
    }

    clearCompleted(items: TodoItem[]): void {
        const onlyActive = items.filter((item) => {
            if (item.state === 'active') {
                return item;
            }
        });
        console.log('onlyActive', onlyActive);
        this.onClearComplete.emit(onlyActive);
    }
}

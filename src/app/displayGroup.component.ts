import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from './shared/todoItem';

@Component({
    selector: 'display-group',
    template: `
        <footer class="footer">
            <span class="todo-count"><strong>{{activeCount}}</strong> items left</span>
            <ul class="filters">
                <li>
                    <a (click)="updateDisplayState('all')" 
                        class={{buttons[0].state}} 
                        href="#/"
                    >
                        All
                    </a>
                </li>
                <li>
                    <a (click)="updateDisplayState('active')"
                        class={{buttons[1].state}} 
                        href="#/active"
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a (click)="updateDisplayState('completed')" 
                        class={{buttons[2].state}}
                        href="#/completed"
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button class="clear-completed" 
                    (click)="onlyActiveTodos=clearCompleted(allItems)"
            >
                Clear completed
            </button>
        </footer>
    `,
})

export class DisplayGroupComponent {
    @Input() activeCount: number;

    @Input() allItems: TodoItem[];
    @Output() onClearComplete = new EventEmitter<TodoItem[]>();

    @Input() activeDisplayState: string;
    @Output() onDisplayChange = new EventEmitter<string>();

    buttons = [
        {name: 'all', state: 'selected'},
        {name: 'active', state: 'not-selected'},
        {name: 'completed', state: 'not-selected'}
    ];

    // onlyActiveTodos: TodoItem[];

    updateDisplayState(buttonType: string): void {
        for (const button of this.buttons) {
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

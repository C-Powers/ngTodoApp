import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { TodoItem } from './todoItem';

@Component({
    selector: 'display-group',
    template: `
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> item left</span>
            <ul class="filters">
                <li>
                    <a (click)="updateDisplayState('all')" class="selected" href="#/">All</a>
                </li>
                <li>
                    <a (click)="updateDisplayState('active')" href="#/active">Active</a>
                </li>
                <li>
                    <a (click)="updateDisplayState('completed')" href="#/completed">Completed</a>
                </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    `,
})

export class DisplayGroupComponent {
    @Input() activeDisplayState: string;
    @Output() newDisplayState = new EventEmitter();

    updateDisplayState(buttonType: string) {
        console.log('display state', this.activeDisplayState);

        console.log(buttonType);
        // this.activeDisplayState = buttonType;
        this.newDisplayState.emit(buttonType);
    }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoListComponent } from './todoList.component';
import { By } from '@angular/platform-browser';
import { TodoItem } from './../shared/todoItem';
 
describe('TodoListComponent', () => {
    let comp: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let todoEl: HTMLElement;
    let debugTodoEl: DebugElement;
    let toggleEl: any;
    let expectedTodoItem: TodoItem;
    let expectedActiveCount: number;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TodoListComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        comp = fixture.componentInstance;
        // todoEl = fixture.debugElement.query(By.css('.todoItem-label'));
        todoEl = fixture.nativeElement;
        // console.log('todoEl', todoEl);
        debugTodoEl = fixture.debugElement;
        console.log('debugTodoEl', debugTodoEl);
        console.log('----- test query', fixture.debugElement.query(By.css('label')));

        toggleEl = todoEl.getElementsByClassName('toggle');
        // console.log('toggleEl', toggleEl);

        expectedTodoItem = {
            id: 1000, state: 'active', name: 'test component'
        };
        expectedActiveCount = 1;

        comp.item = expectedTodoItem;
        comp.activeCount = expectedActiveCount;
        fixture.detectChanges();
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('isEdit defaults to: false', () => {
        expect(comp.isEdit).toEqual(false);
    });

    it('should display item name', () => {
        expect(todoEl.textContent).toContain(expectedTodoItem.name);
        
    });

    it('should toggle state when clicked', () => {
        const completedItem = expectedTodoItem.state = 'completed';

        toggleEl.triggerEventHandler('click', null);
        // I think toggleEl has to be a DebugElement for this to work...
        expect(expectedTodoItem).toBe(completedItem);
    });
});

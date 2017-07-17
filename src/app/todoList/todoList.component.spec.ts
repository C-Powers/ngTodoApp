import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoListComponent } from './todoList.component';
import { By } from '@angular/platform-browser';
import { TodoItem } from './../shared/todoItem';
 
describe('TodoListComponent', () => {
    let comp: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let todoEl: HTMLElement;
    let expectedTodoItem: TodoItem;

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

        expectedTodoItem = {
            id: 1000, state: 'active', name: 'test component'
        };
        comp.item = expectedTodoItem;
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

});

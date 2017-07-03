import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoListComponent } from './todoList.component';

describe('TodoListComponent', () => {
    let comp: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TodoListComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(TodoListComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('isEdit defaults to: false', () => {
        expect(comp.isEdit).toEqual(false);
    });

});

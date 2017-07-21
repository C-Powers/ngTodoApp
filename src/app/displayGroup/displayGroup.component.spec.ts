import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DisplayGroupComponent } from './displayGroup.component';
import { TodoItem } from './../shared/todoItem';

describe('DisplayGroupComponent', () => {
    let comp: DisplayGroupComponent;
    let fixture: ComponentFixture<DisplayGroupComponent>;
    let expectedAllItems: TodoItem[];
    let expectedCompletedItem: TodoItem;
    let expectedActiveItem: TodoItem;
    let expectedDisplayState: string;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DisplayGroupComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayGroupComponent);
        comp = fixture.componentInstance;

        expectedCompletedItem = {
            id: 1000, state: 'completed', name: 'test completed item'
        };
        expectedActiveItem = {
            id: 1001, state: 'active', name: 'test active component'
        };
        expectedAllItems = [expectedActiveItem, expectedCompletedItem];
        expectedDisplayState = 'all';

        comp.allItems = expectedAllItems;
        comp.activeDisplayState = expectedDisplayState;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    // it('buttons defaults to: [, , ]', () => {
    //     expect(comp.buttons).toEqual([, , ]);
    // });

    it('should destroy completed items', () => {
        comp.clearCompleted(comp.allItems);
        let noMoreCompleted = true;
        console.log('comp.allItems after clear', comp.allItems);
        comp.allItems.forEach(item => {
            if (!noMoreCompleted) return;
            if (item.state === "completed") noMoreCompleted = !noMoreCompleted;
        });

        expect(noMoreCompleted).toBe(true);
    });

});

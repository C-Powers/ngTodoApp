import { AppComponent } from './app.component';
import { StateFilterPipe } from './shared/state-filter.pipe';
import { TodoListComponent } from './todoList/todoList.component';
import { DisplayGroupComponent } from './displayGroup/displayGroup.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoItem } from "./shared/todoItem";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let expectedTodos: TodoItem[];
  let expectedDisplayState: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StateFilterPipe,
        TodoListComponent,
        DisplayGroupComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));

    expectedTodos = [
      {id: 1, state: 'active', name: 'eat'},
      {id: 2, state: 'active', name: 'sleep'}
    ];
    comp.items = expectedTodos;

    expectedDisplayState = 'all';
    comp.displayState = expectedDisplayState;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });

  it('should add a new todo item', () => {
    const expectedNewItem = new TodoItem(0, 'active', 'new todo item');
    comp.addNewTodo(expectedNewItem.name);

    expect(comp.items).toContain(expectedNewItem);
  });

  it('should change display state', () => {
    const newDisplayState = 'test display state';
    comp.onDisplayChange(newDisplayState);

    expect(comp.displayState).toBe(newDisplayState);
  });

  it('should update all items', () => {
    const dummyItems = [new TodoItem(10, 'active', '1')];
    comp.onClearComplete(dummyItems);
    expect(comp.items).toBe(dummyItems);
  });

  it('should update the item count', () => {
    const newNumber = 100000;
    comp.onCountChange(newNumber);
    expect(comp.activeCount).toBe(newNumber);
  });

  // it('should toggle all statuses (statusi?)', () => {

  // });
});

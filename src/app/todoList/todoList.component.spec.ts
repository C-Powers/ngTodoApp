// import { async, ComponentFixture, TestBed } from "@angular/core/testing";
// import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
// import { TodoListComponent } from "./todoList.component";
// import { TodoItem } from "./../shared/todoItem";

// describe("TodoListComponent", () => {
//     let comp: TodoListComponent;
//     let fixture: ComponentFixture<TodoListComponent>;
//     let todoEl: HTMLElement;
//     let debugTodoEl: DebugElement;
//     let expectedTodoItem: TodoItem;

//     beforeEach(
//         async(() => {
//             TestBed.configureTestingModule({
//                 declarations: [TodoListComponent],
//                 schemas: [NO_ERRORS_SCHEMA]
//             }).compileComponents();
//         })
//     );

//     beforeEach(() => {
//         fixture = TestBed.createComponent(TodoListComponent);
//         comp = fixture.componentInstance;
//         todoEl = fixture.nativeElement;
//         debugTodoEl = fixture.debugElement;

//         expectedTodoItem = {
//             state: "active",
//             name: "test component"
//         };

//         comp.item = expectedTodoItem;
//         comp.allItems = [expectedTodoItem];
//         comp.activeCount = comp.allItems.length;
//         fixture.detectChanges();
//     });

//     it("can load instance", () => {
//         expect(comp).toBeTruthy();
//     });

//     it("isEdit defaults to: false", () => {
//         expect(comp.isEdit).toEqual(false);
//     });

//     it("should display item name", () => {
//         expect(todoEl.textContent).toContain(expectedTodoItem.name);
//     });

//     it("stateToggle() should toggle state", () => {
//         comp.stateToggle();
//         expect(comp.item.state).toBe("completed");
//     });

//     it("should remove the item from this.allItems", () => {
//         const previousLength = comp.activeCount;
//         comp.destroyItem();
//         expect(comp.activeCount).toBe(previousLength - 1);
//         expect(comp.allItems).not.toContain(expectedTodoItem);
//     });

//     it("should check if an item is completed", () => {
//         expect(comp.setCheckedState()).toBe(false);

//         comp.item.state = "completed";
//         expect(comp.setCheckedState()).toBe(true);
//     });

//     it("sould change the name of the item", () => {
//         const newName = "new item name";
//         comp.editItem(newName);
//         expect(comp.item.name).toBe(newName);
//     });
// });

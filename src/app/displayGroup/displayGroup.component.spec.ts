// import { async, ComponentFixture, TestBed } from "@angular/core/testing";
// import { NO_ERRORS_SCHEMA } from "@angular/core";
// import { DisplayGroupComponent } from "./displayGroup.component";
// import { TodoItem } from "./../shared/todoItem";

// describe("DisplayGroupComponent", () => {
//     let comp: DisplayGroupComponent;
//     let fixture: ComponentFixture<DisplayGroupComponent>;
//     let expectedAllItems: TodoItem[];
//     let expectedCompletedItem: TodoItem;
//     let expectedActiveItem: TodoItem;
//     let expectedDisplayState: string;

//     beforeEach(
//         async(() => {
//             TestBed.configureTestingModule({
//                 declarations: [DisplayGroupComponent],
//                 schemas: [NO_ERRORS_SCHEMA]
//             }).compileComponents();
//         })
//     );

//     beforeEach(() => {
//         fixture = TestBed.createComponent(DisplayGroupComponent);
//         comp = fixture.componentInstance;

//         expectedCompletedItem = {
//             state: "completed",
//             name: "test completed item"
//         };
//         expectedActiveItem = {
//             state: "active",
//             name: "test active component"
//         };
//         expectedAllItems = [expectedActiveItem, expectedCompletedItem];
//         expectedDisplayState = "all";

//         comp.allItems = expectedAllItems;
//         comp.activeDisplayState = expectedDisplayState;
//     });

//     it("can load instance", () => {
//         expect(comp).toBeTruthy();
//     });

//     // it('buttons defaults to: [, , ]', () => {
//     //     expect(comp.buttons).toEqual([, , ]);
//     // });

//     it("should output the selected butotn type", (done: any) => {
//         const newState = "active";
//         comp.onDisplayChange.subscribe((state: string) => {
//             expect(state).toBe(newState);
//             done();
//         });

//         comp.updateDisplayState(newState);
//     });

//     it("should update button select state", () => {
//         const states = ["active", "completed", "all"];

//         states.forEach(newState => {
//             comp.updateDisplayState(newState);

//             comp.buttons.forEach(button => {
//                 if (button.name === newState) {
//                     expect(button.state).toBe("selected");
//                 }
//             });
//         });
//     });

//     it("should output only active items", (done: any) => {
//         comp.onClearComplete.subscribe((items: TodoItem[]) => {
//             items.forEach((item: TodoItem) => {
//                 expect(item.state).toBe("active");
//             });
//             done();
//         });
//         comp.clearCompleted();
//     });
// });

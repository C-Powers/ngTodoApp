import { StateFilterPipe } from './state-filter.pipe';
import { TodoItem } from './todoItem';

describe('StateFilterPipe', () => {
    let pipe: StateFilterPipe;

    beforeEach(() => {
        pipe = new StateFilterPipe();
    });

    it('filters todoItem[] based on current display state', () => {
        const completedItem = new TodoItem(1, 'completed', 'completed item');
        const activeItem = new TodoItem(2, 'active', 'active item');

        const onlyCompleted = [completedItem, completedItem];
        const onlyActive = [activeItem, activeItem];
        const completedAndActive = [activeItem, completedItem];

        const exampleTodoItems = [
            onlyCompleted,
            onlyActive,
            completedAndActive
        ];

        const expectedFilterResults = [
            onlyCompleted,
            [],
            [activeItem]
        ];

        const exampleDisplayState = ['all', 'completed', 'active'];

        exampleTodoItems.forEach((todoItems, i) => {
            expect(
                pipe.transform(todoItems, exampleDisplayState[i])
            ).toEqual(expectedFilterResults[i]);
        });
    });

});

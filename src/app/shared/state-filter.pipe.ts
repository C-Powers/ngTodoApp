import { Pipe, PipeTransform } from "@angular/core";
import { TodoItem } from "./todoItem";

@Pipe({
    name: "statefilter",
    pure: false
})
export class StateFilterPipe implements PipeTransform {
    transform(items: TodoItem[], filter: string): TodoItem[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: TodoItem) => this.applyFilter(item, filter));
    }

    applyFilter(item: TodoItem, filter: string): boolean {
        if (filter !== "all") {
            if (item.state === filter) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}

/**
 * https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor#
 */

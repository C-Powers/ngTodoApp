import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todoList/todoList.component";
import { DisplayGroupComponent } from "./displayGroup/displayGroup.component";

import { ItemService } from "./ItemService";

import { StateFilterPipe } from "./shared/state-filter.pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        TodoListComponent,
        DisplayGroupComponent,
        StateFilterPipe
    ],
    bootstrap: [AppComponent],
    providers: [ItemService]
})
export class AppModule {}
